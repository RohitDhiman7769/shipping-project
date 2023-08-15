const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.get('/wall', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    const query = `SELECT users_post.user_post_img_url, users_post.user_post_caption, users_post.quantity, users_post.price, users.userid, users.profile_img, users.user_firstname FROM users_post INNER JOIN users ON users_post.userid = users.userid WHERE users_post.user_postid IN (SELECT user_wall FROM users_wall WHERE userid = ?)`

    database.query(query, decode, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.json(result)
    })



})


module.exports = router