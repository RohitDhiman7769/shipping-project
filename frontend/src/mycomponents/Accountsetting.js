import React from 'react';
import Navbar from './Navbar';
import './Accountsetting.css';
import Settingnavbar from './Settingnavbar.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Accountsetting() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    function logout() {
        try {
            localStorage.removeItem('token');
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    function Delete() {

        axios.delete('http://localhost:3001/delete-account', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response)
            localStorage.removeItem('token');

        navigate('/')

        }).catch((err) => {
            console.log(err)
        })
        


    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <div className='Notificationsetting-header'></div>
                    <div className='Accountsetting-main'>
                        <div className='Accountsetting-main-child-sidenavbar'>
                            <Settingnavbar />
                        </div>
                        <div className='Accountsetting-main-child-box'>

                            <p style={{ fontSize: '25px', margin: '1em' }}>Account Setting</p>
                            <div style={{ display: 'flex' }}>
                                <p id='logoutinfo'>To Logout Account Press LOGOUT Button: </p>
                                <button id='submitbtn' onClick={logout}>Logout</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p id='deleteAcc'>To Delete Account Press DELETE Button: </p>
                                <button id='dltbtn' onClick={Delete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}