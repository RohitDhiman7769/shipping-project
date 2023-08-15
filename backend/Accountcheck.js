const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/user-profile', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)

    // console.log('body is :',req.body.userid)
    const sqlQuery = `SELECT u.*, (SELECT COUNT(*) FROM users_post WHERE userid = u.userid) AS post_count, (SELECT COUNT(*) FROM users_following WHERE followed_by  = u.userid) AS followed_by, (SELECT COUNT(*) FROM users_following WHERE user_followed  = u.userid) AS user_followed FROM users u WHERE u.userid = ?`
    const value = req.body.userid


    if (decode) {


try{
        database.query(sqlQuery, value, (err, result) => {
            if (err) {
                console.log('Error executing user profile query: ', err);
                return res.status(500).json({ error: 'Query error' });

            }

            if (result.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const usersdata = {
                userid: result[0].userid,
                user_email: result[0].user_email,
                profile_img: result[0].profile_img,
                user_firstname: result[0].user_firstname,
                user_bio: result[0].user_bio,
                post_count: result[0].post_count,
                followed_by: result[0].followed_by,
                user_followed: result[0].user_followed,
                post: []

            }



            const postdata = 'SELECT  users_post.user_postid, users_post.user_post_img_url FROM users_post WHERE userid = ? ';
            database.query(postdata, value, (err, postsResult) => {
                if (err) {
                    console.log(err)
                }
                usersdata.post = postsResult.map(data => ({
                        user_postid: data.user_postid,
                        user_post_image_url: data.user_post_img_url,

                    }))
                    res.json(usersdata)
                })

            // console.log(result)
        })
    }catch(err){
        console.log('catach er:', err)
    }
    }

})
module.exports = router;