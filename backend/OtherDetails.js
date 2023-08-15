const database = require('./connection');
const express = require('express')
const router = express.Router()
const app = express()
const jwt = require('jsonwebtoken');
const secretkey = 'thesecretkey';

const bodyParser = require('body-parser')

app.use(bodyParser.json())
router.post('/useraddressdetails', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)


    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const pincode = req.body.pincode;

    const query = `INSERT INTO  users_otherdetails ( userid ,  user_address ,  user_city ,  user_state ,  user_country , user_pincode) VALUES (?, ?, ?, ? ,? ,?) `
    const value = [decode, address, city, state, country, pincode]

    database.query(query, value, (err, result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
});

module.exports = router;

