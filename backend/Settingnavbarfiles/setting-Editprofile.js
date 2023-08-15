const express = require('express');
const connection = require('../connection');
const app = express();
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const router = express.Router()
const secretkey = 'thesecretkey';


app.use(bodyParser.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Imagecomp/');
  },
  filename: function (req, file, cb) {
    const img = crypto.randomBytes(32).toString('hex') + file.originalname;
    cb(null, img);
  },
});


const upload = multer({ storage: storage });



router.post('/setting/profile-update', upload.single('userupdateddp'), (req, res) => {

  const token = req.headers.authorization?.split(' ')[1];
  const decode = jwt.verify(token, secretkey)

  const username = req.body.userupdatedname;
  const userProfileImage = req.file.filename;
  const userBio = req.body.userupdatedbio;

  // console.log( userProfileImage)
  
  if (decode) {
    try {

      const sqlQuery = 'UPDATE users SET user_firstname = ?,profile_img = ?, user_bio = ? WHERE userid = ?';
      const VALUES = [username, userProfileImage, userBio, decode];

      connection.query( sqlQuery, VALUES ,(err, result) => {
          if (err) {
            console.log(err)
          }
          console.log(result)
          res.json('Data is updated')
        })
    } catch (err) {
      console.log(err)

    }
  }
  
});

app.use('/images', express.static(path.join(__dirname, 'Imagecomp')));

app.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, 'Imagecomp', filename);
  res.sendFile(imagePath);
});

module.exports = router;
