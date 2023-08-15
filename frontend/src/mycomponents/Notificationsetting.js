import React, { useState } from 'react';
import Navbar from './Navbar';
import './Notificationsetting.css';
import Settingnavbar from './Settingnavbar.js';
export default function Notificationsetting() {
   
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <div className='Notificationsetting-header'></div>
                    <div className='Notificationsetting-main'>
                        <div className='Notificationsetting-main-child-sidenavbar'>
                            <Settingnavbar />
                        </div>
                        <div className='Notificationsetting-main-child-box'>

                            <p style={{ fontSize: '25px', margin: '1em' }}>Notification</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}