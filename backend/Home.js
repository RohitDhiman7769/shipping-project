const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.get('/Home-page', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)
    // console.log(decode)

    database.query('SELECT  users_post.user_postid , users_post.user_post_img_url, users_post.user_post_caption, users_post.quantity, users_post.price, users.userid, users.user_email, users.profile_img, users.user_firstname, users.user_bio  FROM users_post LEFT JOIN users ON users_post.userid = users.userid WHERE users_post.userid != ?', decode,
     (err,result)=>{
        if(err){
            console.log("err is: ", err)
        }
        res.json(result)
    })

})

module.exports = router;
