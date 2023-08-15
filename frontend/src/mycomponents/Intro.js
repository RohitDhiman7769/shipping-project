import {React , useEffect }from 'react';
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import Icon from '../projectimg/logo.png';
import './Intro.css';

function Intro() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/home')
        }
    })
    return (
        <>
            <div className="intro-container">

                <div className="leftBox">
                    <img id="icon" src={Icon} alt="Icon" />
                    <h1 id="greet">WELCOME</h1>
                </div>

                <div className="rightBox">
                    <p id="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis qui ducimus odio repudiandae
                        inventore
                        modi sunt et blanditiis vero consectetur.</p>
                    <div style={{display:'grid'}}>
                        <Link to='/Login' id="loginbtn" name="login">LOG IN</Link >
                        <Link to='/Signup' id="signupbtn" name="signup">SIGN UP</Link >
                    </div>
                </div>

            </div>
        </>
    )
}

export default Intro;