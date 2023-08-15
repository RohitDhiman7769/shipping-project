import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './setting.css';
import Settingnavbar from './Settingnavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Setting() {

    const [username, updateUserName] = useState('')
    const [userdp, updateUserDp] = useState()
    const [userbio, updateUserBio] = useState()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    })

     function Updateprofile() {
        try {
            const formData = new FormData();
            formData.append('userupdatedname', username)
            formData.append('userupdateddp', userdp)
            formData.append('userupdatedbio', userbio)

            const token = localStorage.getItem('token')
            axios.post('http://localhost:3001/setting/profile-update', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                console.log(response)

            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }

        updateUserName('')
        updateUserBio('')

        
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className='sidenavbar' >
                    <Navbar />
                </div>
                <div >
                    {/* header */}
                    <div className='setting-head' style={{ height: '6em', width: '85.5', backgroundColor: 'rgb(224, 226, 246)' }}></div>
                    <div className='setting-main' style={{ display: 'flex' }}>
                        <div className='main-child-side-navbar'>
                            <Settingnavbar />
                        </div>
                        <div className='main-child-box'>

                            <p style={{ fontSize: '25px', margin: '1em' }}>Edit Your Profile</p>
                            <form>
                                <div style={{ marginTop: '3em', marginBottom: '3em' }}>
                                    <label className='username-label'>Name:</label>
                                    <input id='usernameinput' value={username} type='text' onChange={(e) => { updateUserName(e.target.value) }} ></input>
                                </div >

                                <label id='profilechange-label' >Update profile Image: </label>
                                <input id='userimageinput' type='file' accept="image/*" name='file' onChange={(e) => { updateUserDp(e.target.files[0]) }}></input><br></br>

                                <div style={{ marginTop: '2em' }}>
                                    <label id='userbio-label'>Bio:</label>
                                    <textarea id='userbioinput' value={userbio} type='text' placeholder='No more than 50 words' onChange={(e) => { updateUserBio(e.target.value) }}></textarea>
                                </div>
                            </form>
                            <button id='updatebutton' onClick={Updateprofile}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

