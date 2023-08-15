import { Link } from "react-router-dom";
import Image from './cvprofilepic.jpg'
import React from 'react';
import './Sidenavbar.css'


function Sidenavbar() {
    return (
        <>
            <div className='sidenavbar'>
                <div className="pic">
                    <img className='cv_dp' src={Image} />
                </div>
                <div style={{ border: '1px solid red', height: '35.7em' }}>
                    <div className='info'>
                        <Link to="/profile">Profile</Link>
                        <Link to="/qualification">Qualification</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/experience">Experience</Link>
                        <Link to="/contact">Contact</Link>


                    </div>

                    <p className="navfooter">Contact Me:</p>
                    <p style={{color:'red'}}>rohitfatehpur007@gmail.com</p>
                </div>
            </div>
        </>
    )
}



export default Sidenavbar;