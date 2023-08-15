import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './OtherDetails.css';
import axios from 'axios';

function OtherDetails() {

    const token = localStorage.getItem('token')

    const [address, regAddress] = useState('');
    const [city, regCity] = useState('');
    const [state, regState] = useState('');
    const [country, regCountry] = useState('');
    const [pincode, regPincode] = useState('');

    const data = { address, city, state, country, pincode }
    console.log(data)

    async function submit() {

        try {
            const response = await axios.post('http://localhost:3001/useraddressdetails', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className='container'>
            <div className='inner-div'>
                <div style={{ display: 'grid', height: '30em', display: 'inline-block' }}>
                    <form style={{ marginLeft: '2em' }}>
                        <h1 id='label' >Other Information</h1>
                        <input id='address' value={address} placeholder='Address' onChange={(e) => { regAddress(e.target.value) }} />
                        <input id='city' value={city} type='text' placeholder='City' onChange={(e) => { regCity(e.target.value) }} />
                        <input id='state' value={state} placeholder='State' onChange={(e) => { regState(e.target.value) }} />
                        <input id='country' value={country} placeholder='Country' onChange={(e) => { regCountry(e.target.value) }} />
                        <input id='pincode' value={pincode} placeholder='Area Pincode' onChange={(e) => { regPincode(e.target.value) }} />
                    </form>
                </div>
                <div>
                    <Link to='/Home'   ><button className='nextbtn' onClick={submit} > Next</button></Link>
                </div>
            </div>
        </div>
    )
}
export default OtherDetails;