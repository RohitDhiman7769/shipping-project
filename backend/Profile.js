const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';


router.get('/profile', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];
    const decode = jwt.verify(token, secretkey)


    const sqlquery = 'SELECT  * FROM users WHERE userid = ?'

    const VALUES = [decode]

    database.query(sqlquery, VALUES, (err, result) => {
        if (err) {
            console.error('Error executing user profile query: ', err);

            return res.status(500).json({ error: 'Query error' });
        }

        if (result.length === 0) {

            return res.status(404).json({ error: 'User not found' });
        }
        const users = {
            userid: result[0].userid,
            user_email: result[0].user_email,
            profile_img: result[0].profile_img,
            user_firstname: result[0].user_firstname,
            user_bio: result[0].user_bio,
            posts: []

        }

        const postquery = 'SELECT  users_post.user_postid, users_post.user_post_img_url, users_post.user_post_caption FROM users_post WHERE userid = ? '
        database.query(postquery, VALUES, (err, postresult) => {
            if (err) {
                console.error('Error executing user posts query: ', err);
                return res.status(500).json({ error: 'Query error' });
            }

            users.posts = postresult.map(post => ({
                user_postid: post.user_postid,
                user_post_image_url: post.user_post_img_url,
                user_post_caption: post.user_post_caption
            }))
            res.json(users)
            
        })
    })



    // database.query(sqlQuery, VALUES, (err, result) => {
    //     if (err) {
    //         res.status(500).json({ error: 'Error retrieving data' });
    //     }
    //     console.log("result is: ", result)
    //     res.json(result)
    // })
}
)

module.exports = router;