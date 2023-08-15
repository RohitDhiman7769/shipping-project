const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/fetch-comments', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

     const postid = req.body.val
     console.log(postid)

    const query = `SELECT users_comment.user_comment, users.profile_img FROM users_comment join users ON users_comment.user_postid = users.userid WHERE  users_comment.user_postid = ?`
    const VALUES = [postid]
    database.query(query, VALUES, (err, result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.json(result)
    })
})
module.exports = router;