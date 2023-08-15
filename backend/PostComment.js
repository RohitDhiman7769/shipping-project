const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/send-comment', (req, res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

     const postid = req.body.valueOne
    const setcomment = req.body.postComment
    const query = `INSERT INTO users_comment ( user_postid, user_comment , userid ) VALUES ( ?, ?, ?);`
    const VALUES = [postid, setcomment, decode]
    database.query(query, VALUES, (err, result)=>{
        if(err){
            console.log(err)
        }
    })
    res.json('done')
})
module.exports = router;