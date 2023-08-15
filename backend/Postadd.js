const express = require('express');
const Database = require('./connection');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const router = express.Router()
const secretkey = 'thesecretkey'

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Imagecomp/');
  },
  filename: function (req, file, cb) {
    const filename = crypto.randomBytes(32).toString('hex') + file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage: Storage });

router.post('/add-post', upload.single('file'), (req, res) => {
  const Image = req.file;
  const Caption = req.body.postDescription;
  const quantity = req.body.productQuantity
  const price = req.body.productPrice

  const token = req.headers.authorization?.split(' ')[1]
  const decode = jwt.verify(token, secretkey)


  Database.query(
    'INSERT INTO users_post ( userid, user_post_img_url, user_post_caption, quantity, price) VALUES (?,?,?,?,?)',
    [decode, Image.filename, Caption, quantity, price ],
    (err, result) => {
      if(err){
        console.log(err)
      }
      // console.log(result);
    });
  res.send('registered');
});

app.use('/images', express.static(path.join(__dirname, 'Imagecomp')));

router.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const imgPath = path.join(__dirname, 'Imagecomp', filename);
  res.sendFile(imgPath);
});

module.exports = router
