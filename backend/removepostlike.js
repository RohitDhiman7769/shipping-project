const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/removepostlike',(req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)
    const post_id = req.body.postid

    const query = `DELETE FROM users_like
    WHERE userid = ? AND user_postid = ?`
    const value = [decode , post_id]
    database.query(query, value, (err, result)=>{
        if(err){
            console.log(err)

        }
        res.json('okay')
        
    })
})

module.exports = router;
