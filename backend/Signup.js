const express = require('express');
const database = require('./connection.js')
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const router = express.Router()
const jwt = require('jsonwebtoken');

const secretkey = 'thesecretkey';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Imagecomp/');
    },
    filename: function (req, file, cb) {
        const fName = crypto.randomBytes(32).toString("hex") + file.originalname;
        cb(null, fName);
    }
});

const upload = multer({ storage: storage });

router.post('/signup', upload.single('filename'), (req, res) => {

    const useremail = req.body.regUseremail
    const userpassword = req.body.regPassword
    const firstname = req.body.firstName
    const lastname = req.body.lastName
    const gender = req.body.gender
    const dob = req.body.dob
    const file = req.file.filename


    database.query(`select * from users where user_email = ?`, [useremail], (err, result)=>{
     
        if(result.length != 0){
            console.log('result is: ',result)
            res.status(404).send('Email already exist');
        }

     
        // if(err){
        database.query('INSERT INTO users (user_email,user_password, user_firstname, user_lastname, user_gender, user_dob, profile_img) VALUES(?,?,?,?,?,?,?)',
        [useremail, userpassword, firstname, lastname, gender, dob, file],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send('Error occurred during registration');
            }
            const payload = result.insertId
            console.log('payload is: ',payload)
            const token = jwt.sign(payload, secretkey)
            return res.json(token);
        })
        // }
    })





});


router.use('/images', express.static(path.join(__dirname, 'Imagecomp')));

router.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, 'Imagecomp', filename);
    res.sendFile(imagePath);
});



module.exports = router;