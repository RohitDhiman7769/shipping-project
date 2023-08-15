import React from 'react';
import { Link } from 'react-router-dom';
import './Settingnavbar.css'
function Settingnavbar() {
    return (
        <div className='setting-sidenavbar' >
            <p  style={{fontSize:'24px'}}>Account Manage</p>
            <div  className='navbar'   style={{display: 'grid'}}>
            <Link to='/setting' className='navbar-link' > Edit Profile</Link>
            <Link to='/setting/personal-details'  className='navbar-link'>Personal Details</Link>
            <Link to='/setting/password-and-security' className='navbar-link'>Password and Security</Link>
            <Link to='/setting/Notification' className='navbar-link'>Notification</Link>
            <Link to='/setting/Manage-wall' className='navbar-link'>Manage Wall</Link>
            <Link to='/setting/account-setting' className='navbar-link'>Account Setting</Link>
            </div>
        </div>
    )
}
export default Settingnavbar;