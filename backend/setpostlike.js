const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/setpostlike',(req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    const post_id = req.body.postid

    const query = `INSERT INTO users_like (userid, user_postid) VALUES (?, ?)`
    const value = [decode , post_id]

    database.query(query, value, (err, result)=>{
        if(err){
            console.log(err)

        }
        res.json('okay')
        
    })


})

module.exports = router;
