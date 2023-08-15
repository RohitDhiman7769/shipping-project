const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.get('/get-address', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    const query = 'SELECT * FROM `users_otherdetails` WHERE userid = ?'
    database.query(query, decode, (err, result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})

module.exports = router;
