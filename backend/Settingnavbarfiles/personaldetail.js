const express = require('express');
// const connection = require('../connection');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.post('/setting/personalDetails', (req, res) => {
    try{
       
        const contactnumber = req.body.contactNumber
        const emailid = req.body.emailid
        const dob = req.body.dateOfBirth
        const address = req.body.address
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const pincode = req.body.areaPincode

        console.log(contactnumber, emailid, dob, address, city, state, country, pincode)
        // console.log(req.body);
        res.send('okay at there')
    } catch (error) {
        console.log(error)
    };
})
// app.listen(3001, () => {
//     console.log('server running')
// })