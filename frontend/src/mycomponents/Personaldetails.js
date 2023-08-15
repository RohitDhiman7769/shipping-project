import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import './Personaldetails.css';
import Settingnavbar from './Settingnavbar';

export default function Personaldetails() {
    const [usercontact, updateUsercontact] = useState('');
    const [useremailid, updateUseremail] = useState('');
    const [userdob, updateUserdob] = useState('');
    const [useraddress, regAddress] = useState('');
    const [usercity, regCity] = useState('');
    const [userstate, regState] = useState('');
    const [usercountry, regCountry] = useState('');
    const [userpincode, regPincode] = useState('');

    // const data = { usercontact,useremailid,userdob, address, city, state, country, pincode }
    // console.log(data)

    function Profileupdate() {
            const formdata = new FormData()
            formdata.append('contactNumber', usercontact)
            formdata.append('emailid',useremailid)
            formdata.append('dateOfBirth',userdob)
            formdata.append('address',useraddress)
            formdata.append('city',usercity)
            formdata.append('state',userstate)
            formdata.append('country',usercountry)
            formdata.append('areaPincode',userpincode)


        fetch('http://localhost:3001/setting/personalDetails', {
            method: 'POST',
            body: formdata
        }).then((Response) => {
            console.log(Response)
        }).catch((Error) => {
            console.log(Error)
        })

        updateUsercontact('')
        updateUseremail('')
        updateUserdob('')
        regAddress('')
        regCity('')
        regState('')
        regCountry('')
        regPincode('')
    }

return (
    <>
        <div style={{ display: 'flex' }}>
            <div>
                <Navbar />
            </div>
            <div>
                <div className='personaldetails-header'></div>
                <div className='personaldetails-main'>
                    <div className='personaldetails-main-child-sidenavbar'>
                        <Settingnavbar />
                    </div>
                    <div className='personaldetails-main-child-box'>

                        <p style={{ fontSize: '25px', margin: '1em' }}>Personal Details</p>
                        <form>
                            <div style={{ marginTop: '1em' }}>
                                <label id='usercontact-label'>Contact: </label>
                                <input id='usercontact' type='number' value={usercontact} placeholder='Contact' onChange={(e) => { updateUsercontact(e.target.value) }}></input>
                            </div>

                            <div style={{ marginTop: '1em' }}>
                                <label id='useremail-label'>Email I'd:</label>
                                <input id='useremail' type='email' value={useremailid} placeholder="Email I'd" onChange={(e) => { updateUseremail(e.target.value) }}></input>
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='userdob-label'>Date Of Birth:</label>
                                <input id='userdob' type='date' value={userdob} placeholder='Date of Birth' onChange={(e) => { updateUserdob(e.target.value) }}></input>
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='useraddress-label'>Address: </label>
                                <input id='useraddress' value={useraddress} placeholder='Address' onChange={(e) => { regAddress(e.target.value) }} />
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='usercity-label'>City:</label>
                                <input id='usercity'  type='text' value={usercity} placeholder='City' onChange={(e) => { regCity(e.target.value) }} />
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='userstate-label'>State:</label>
                                <input id='userstate' value={userstate} placeholder='State' onChange={(e) => { regState(e.target.value) }} />
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='usercountry-label'>Country:</label>
                                <input id='usercountry' value={usercountry} placeholder='Country' onChange={(e) => { regCountry(e.target.value) }} />
                            </div>
                            <div style={{ marginTop: '1em' }}>
                                <label id='useroincode-label'>Area Pincode:</label>
                                <input id='userpincode' value={userpincode}  placeholder='Area Pincode' onChange={(e) => { regPincode(e.target.value) }} />
                            </div>

                        </form>
                        <button id='profileupdate' onClick={Profileupdate}>Update</button>


                    </div>
                </div>
            </div>
        </div>
    </>
)
}