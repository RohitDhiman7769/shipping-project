const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/share-post', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)
    const userid = req.body.selectId
    const postid = req.body.postId

    function insertData(postid, userid){
        const values = [];
        for(let user_id of userid){
            values.push([postid, user_id])
        }
        return values;
    }
    const query = 'INSERT INTO users_wall (user_wall, userid) VALUES ?';
    const value = insertData(postid, userid);

    database.query(query, [value], (err, result)=>{
        if(err){
            console.log(err)
        }

        res.json(result);
    })

    
})

module.exports = router;
