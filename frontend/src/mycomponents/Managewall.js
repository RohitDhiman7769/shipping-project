import React from 'react';
import Navbar from './Navbar';
import './Managewall.css';
import Settingnavbar from './Settingnavbar.js';
export default function Managewall() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <div className='Managewall-header'></div>
                    <div className='Managewall-main'>
                        <div className='Managewall-main-child-sidenavbar'>
                            <Settingnavbar />
                        </div>
                        <div className='Managewall-main-child-box'>

                        <input type='radio'></input>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}