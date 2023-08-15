const database = require('./connection');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router()

const secretkey = 'thesecretkey';

router.post('/login', (req, res) => {

    // console.log(req.body)
    const userEmail = req.body.regUsername;
    const userpassword = req.body.regPassword;

    const query = `SELECT * FROM users WHERE user_email = '${userEmail}' && user_password = '${userpassword}'`;

    database.query(query, (err, result) => {
        if (err) {
            res.status(400).send();

        } else if (result.length == 0) {
            res.status(404).send('User not exist');
        } else {
            const payload = result[0].userid 
            const token = jwt.sign(payload, secretkey);
            return res.json(token)
        }
    });
});





module.exports = router;
