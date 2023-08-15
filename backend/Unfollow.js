const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/unfollow', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    console.log(req.body)

    // userid = req.body
    // console.log('userid is',userid)



    const sqlQuery = 'DELETE FROM users_following WHERE user_followed = ? AND followed_by = ?'
    const value = [userid, decode]

    database.query(sqlQuery, value, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })
})

module.exports = router