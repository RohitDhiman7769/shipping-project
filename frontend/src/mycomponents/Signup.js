import React, { useEffect, useState } from 'react';
import Icon from '../projectimg/logo.png';
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const navigate = useNavigate()
    const [regUseremail, setRegUseremail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [firstName, regFirstName] = useState('');
    const [lastName, regLastName] = useState('');
    const [gender, regGender] = useState('');
    const [dob, regDob] = useState('');
    const [selectedimg, regImage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/home')
        }
    })

    function setToken(token) {
        localStorage.setItem('token', token);
    }

    async function sign(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('filename', selectedimg)
        formData.append('regUseremail', regUseremail)
        formData.append('regPassword', regPassword)
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('gender', gender)
        formData.append('dob', dob)
        try {
            const response = await axios.post('http://localhost:3001/signup', formData)
            const token = response.data
            setToken(token)
            navigate('/OtherDetails')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="signup-container">

            <div className="leftBox">
                <img id="icon" src={Icon} alt="Icon" />
                <h1 id="greet">WELCOME</h1>
            </div>

            <div className="rightBox">

                <form style={{ display: 'grid' }}>
                    <input id="emailid" name="email" value={regUseremail} placeholder="Email I'd" onChange={(e) => { setRegUseremail(e.target.value) }} />
                    <input id="userpassword" name="password" value={regPassword} placeholder='Password' onChange={(e) => { setRegPassword(e.target.value) }} />
                    <input id='userfirstname' value={firstName} placeholder='First Name' onChange={(e) => { regFirstName(e.target.value) }} />
                    <input id='userlastname' value={lastName} placeholder='Last Name' onChange={(e) => { regLastName(e.target.value) }} />

                    <input id='usergender' value={gender} placeholder='Gender' onChange={(e) => { regGender(e.target.value) }} />
                    <input id='userDob' type='date' value={dob} placeholder='Date of Birth' onChange={(e) => { regDob(e.target.value) }} />
                    <input id='userfile' type="file" accept="image/*" onChange={(e) => { regImage(e.target.files[0]) }} />
                    <Link to='/Home' > <button className='submit' onClick={sign} >SIGN UP</button></Link>
                </form>
            </div>

        </div>
    )
}
export default Signup;