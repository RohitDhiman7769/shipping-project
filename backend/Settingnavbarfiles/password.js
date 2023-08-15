const express = require('express');
const database = require('../connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());


router.put('/setting/password-and-security', (req, res) => {

  const token = req.headers.authorization?.split(' ')[1];
  const decode = jwt.verify(token, secretkey)
  console.log(req.body)
  const password = req.body.updatepassword;
  // console.log(password)
  try {
    const query = 'UPDATE users SET user_password = ? WHERE userid = ?'
    const value = [password, decode]

    database.query(query, value, (err, result) => {
      if (err) {
        console.log(err)
      }
      res.json('Password Update')
    })

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
