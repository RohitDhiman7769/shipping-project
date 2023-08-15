import React, { useState } from 'react';
import Navbar from './Navbar';
import './Passwordsecurity.css';
import Settingnavbar from './Settingnavbar.js';
import axios from 'axios'
export default function Passwordsecurity() {

    const [password, regPassword] = useState('')
    const token = localStorage.getItem('token')


    function updatedpassword() {
            const formdata = new FormData()
            formdata.append('updatepassword', password)

            axios.put('http://localhost:3001/setting/password-and-security', formdata , {
               headers:{
                Authorization:`Bearer ${token}`
               }
            }).then((Response) => {
                console.log(Response)
            }).catch((Error) => {
                console.log(Error)
            })
            regPassword('')
        }    
    
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <div className='Passwordsecurity-header'></div>
                    <div className='Passwordsecurity-main'>
                        <div className='Passwordsecurity-main-child-sidenavbar'>
                            <Settingnavbar />
                        </div>
                        <div className='Passwordsecurity-main-child-box'>

                            <p style={{ fontSize: '25px', margin: '1em' }}>Password and Security</p>
                            <form>
                                <label id='password-label'>Password:</label>
                                <input type='password' id='updatedpassword' value={password} onChange={(e) => { regPassword(e.target.value) }}></input><br></br>
                            </form>
                            <button id='updatebtn' onClick={updatedpassword}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}