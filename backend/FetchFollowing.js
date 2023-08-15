
const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.get('/fetch-following', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)
    

    const query = `SELECT user_firstname, profile_img, userid from users WHERE userid IN ( SELECT user_followed FROM users_following WHERE followed_by = ? )`
    database.query(query, decode, (err,result)=>{
        if(err){
            console.log("err is: ", err)
        }
        res.json(result)
        // console.log(result)
    })


})

module.exports = router;
