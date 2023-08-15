import React, { useState , useEffect} from 'react';
import './Login.css';
import Icon from '../projectimg/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Login() {
    const navigate = useNavigate();
    const [regUsername, setRegUsername] = useState('')
    const [regPassword, setRegPassword] = useState('')

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/home')
        }
    },[])

    function setToken(token) {
        localStorage.setItem('token', token);
    }
    // const data = {regUsername, regPassword}
    async function onLogin(e) {
        e.preventDefault();
        try {         
            const response = await axios.post('http://localhost:3001/login', { regUsername, regPassword });        
            const token = response.data
            setToken(token)
            navigate('/home')
        } catch (err) {
            console.log(err)
            alert('User not found')
        }
    }
    return (
        <>
            <div className="login-container">

                <div className="leftBox">
                    <img id="icon" src={Icon} alt="Icon" />
                    <h1 id="greet">WELCOME</h1>
                </div>

                <div className="rightBox">
                    <p id="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis qui ducimus odio repudiandae
                        inventore
                        modi sunt et blanditiis vero consectetur.</p>
                    <form style={{ display: 'grid' }} onSubmit={onLogin}>
                        <input id="emailbox" value={regUsername} placeholder="Email I'd" onChange={(e) => { setRegUsername(e.target.value) }} />
                        <input id="password" value={regPassword} placeholder='Password' onChange={(e) => { setRegPassword(e.target.value) }} />
                        <button id='submit' onClick={onLogin}>LOG IN</button>
                    </form>
                </div>

            </div>
        </>
    )

}

export default Login;