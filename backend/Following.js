

const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/follow', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    userid = req.body.userid


    const sqlQuery = 'INSERT INTO users_following (followed_by, user_followed) VALUES (? , ?)'
    const value = [decode, userid]

    database.query(sqlQuery, value , (err, result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})

module.exports = router