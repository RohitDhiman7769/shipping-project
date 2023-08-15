import React from 'react';
import Navbar from './Navbar';
import './Notification.css';
export default function Notification() {

    return (

            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    {/* header */}
                    <div className='notification-header'></div>
                    <div className='notification-main'>
                    </div>

                </div>
            </div>

    )
}