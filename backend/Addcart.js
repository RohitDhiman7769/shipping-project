const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/add-cart', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)
    const post = req.body.id

    const quer = 'INSERT INTO users_cart (userid, user_cart) VALUES ( ?, ? )'
    const values = [ decode, post]

    database.query(quer, values,(err, result)=>{
        if (err){
            console.log(err)
        }
        res.json(result)
    })
})


module.exports = router;
