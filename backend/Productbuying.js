
const express = require('express');
const database = require('./connection');
const jwt = require('jsonwebtoken');
const router = express.Router()
const secretkey = 'thesecretkey';

router.post('/Produc_buying', (req, res)=>{
    console.log(req.body)
    res.json('okay')
})
module.exports = router;
