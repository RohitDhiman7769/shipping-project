import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Usersdp.css';

function Usersdp() {
const [selectedimg , regSelectedImg] = useState('');

function Uploadimg(){
    if(selectedimg){
        const formData = new formData();
        formData.append('file', selectedimg)

        fetch('http://localhost:3001/Makeprofile',
        {
            method:'POST',
            body: formData
        }).then((Response)=>{
            console.log(Response)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
    return (
        <div className='makeprofile-container'>
            <h1 id='label' >Make Profile</h1>
            <form style={{ alignSelf: 'center', justifyContent: 'center' }}>
                <input type="file" accept="image/*" capture="camera" onChange={(e)=>{regSelectedImg(e.target.files[0])}} />
                <input type='file' accept="image/*" capture="camera" onChange={(e)=>{regSelectedImg(e.target.files[0])}}  />
            </form>
            <Link to='/profile'   ><button className='next' onClick={Uploadimg}> Next</button></Link>

        </div>
    )
}
export default Usersdp;