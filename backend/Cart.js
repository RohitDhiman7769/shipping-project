const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.get('/cart', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    const query = `SELECT * FROM users_post WHERE user_postid IN (SELECT user_cart FROM users_cart  WHERE userid = ?)`
    database.query(query, decode, (err, result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})
module.exports = router;
