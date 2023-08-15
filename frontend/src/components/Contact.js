import React from 'react';
// const sql = require('')
import './Contact.css'
// import { useState } from 'react';

export default function Contact() {

    // const [value, sethandleclick] = useState(sethandleclick(false))

    // function handleclick() {

    //     document.getElementsByClassName('name').style.display = {value}
    //     document.getElementsByClassName('phonenumber').style.display =  {value}
    //     document.getElementsByClassName('email').style.display =  {value}
    //     document.getElementsByClassName('resume').style.display =  {value}

    //     sethandleclick(true)

    // }

    return (
        <>
            <div style={{ display: 'flex', marginLeft: '5px', color: 'red' }}>
                <div style={{ display: 'grid' }}>
                    <p style={{ color: 'red' }}>Email: </p>
                    <p style={{ color: 'red' }}>Phone No: </p>
                    <p style={{ color: 'red' }}>Instagram I'd: </p>
                    <p style={{ color: 'red' }}>Address: </p>
                    <p style={{ color: 'red' }}>LinkedIn: </p>


                </div>
                <div style={{ color: 'green', marginLeft: '1em', display: 'grid' }}>
                    <p style={{ fontSize: '14px' }}>rohitfatehpur007____ </p>
                    <p style={{ fontSize: '14px' }}>8168394480___ </p>
                    <p style={{ fontSize: '14px' }}>rohitdhiman7769___</p>
                    <p style={{ fontSize: '14px' }}>kaithal, Haryana___ </p>
                    <p style={{ fontSize: '14px' }}>rohitDhiman___ </p>


                </div>

            </div>
            <div  style={{ border: '1px solid red', height: '15em', width: '25em', margin: '4em 1em', paddingLeft: '3px' }}>
                <h2 style={{ color: 'red', textAlign: 'center' }}>Contact Us:</h2>
                <form>
                    <input  style={{ border: '1px solid red', backgroundColor: 'black', color: 'red', height: '1em', width: '10em' }} className='name' placeholder='Your Name'></input>
                    <input  style={{ border: '1px solid red', backgroundColor: 'black', color: 'red', height: '1.7em', width: '12em', margin: '2px' }} type='tel' className='phonenumber' placeholder='Contact Number'></input>
                    <input  style={{ border: '1px solid red', backgroundColor: 'black', color: 'red', height: '1.7em', width: '18em', margin: '2px' }} className='email' placeholder='Email'></input>

                    <input style={{ border: '1px solid red', backgroundColor: 'red', color: 'black', display: 'block', height: '1.7em', width: '11em', margin: '1em 10em', cursor: 'pointer' }}  type='submit' className='submit' ></input>
                </form>

            </div>
        </>
    )

}