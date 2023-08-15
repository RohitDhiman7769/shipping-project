import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './mycomponents/Signup.js';
import Login from './mycomponents/Login.js';
import Intro from './mycomponents/Intro.js';
import Creatprofile from './mycomponents/Creatprofile.js';
import OtherDetails from './mycomponents/OtherDetails.js';
import Home from './mycomponents/Home.js'
import Wall from './mycomponents/Wall';
import Cart from './mycomponents/Cart';
import Search from './mycomponents/Search';
import Notification from './mycomponents/Notification.js';
import Setting from './mycomponents/Setting.js';
import Profile from './mycomponents/Profile.js';
import Usersdp from './mycomponents/Usersdp.js'
import Poststepone from './mycomponents/Addpost.js';
import Personaldetails from './mycomponents/Personaldetails.js';
import Notificationsetting from './mycomponents/Notificationsetting.js';
import Managewall from './mycomponents/Managewall.js';
import Passwordsecurity from './mycomponents/Passwordsecurity.js';
import Accountsetting from './mycomponents/Accountsetting.js';
import AccountCheck from './mycomponents/AccountCheck.js';
import Followingusers from './mycomponents/Following-users.js';

export default function Myproject() {
    return (
        
            <div>
                    <Routes>
                        <Route path='/' Component={Intro} />
                        <Route path='/Login' Component={Login} />
                        <Route path='/Signup' Component={Signup} />
                        {/* <Route path='/Creatprofile' Component={Creatprofile}/> */}
                        <Route path='/OtherDetails' Component={OtherDetails}/>
                        <Route path='/Home' Component={Home}/>
                        <Route path='/Wall' Component={Wall} />
                        <Route path='/Search' Component={Search} />
                        <Route path='/Cart' Component={Cart} />
                        <Route path='/Notification' Component={Notification}/>
                        <Route path='/Profile' Component={Profile}/>
                        <Route path='/Setting' Component={Setting}/>
                        <Route path='/Usersdp' Component={Usersdp}/>
                        <Route path='/Poststepone' Component={Poststepone}/>
                        <Route path='/setting/personal-details' Component={Personaldetails} />
                        <Route path='/setting/password-and-security' Component={Passwordsecurity} />
                        <Route path='/setting/Notification' Component={Notificationsetting} />
                        <Route path='/setting/Manage-wall' Component={Managewall} />
                        <Route path='/setting/account-setting'Component={Accountsetting} />
                        <Route path='/Account-check' Component={AccountCheck} />
                        <Route path='/following-users' Component={Followingusers} />
                    </Routes>

            </div>
    )
}