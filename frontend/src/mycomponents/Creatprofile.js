// import React, { useState } from 'react';
// import './Creatprofile.css';
// import { Link } from "react-router-dom";

// function Creatprofile() {
//     const [firstName, regFirstName] = useState('');
//     const [lastName, regLastName] = useState('');
//     const [gender, regGender] = useState('');
//     const [dob, regDob] = useState('');

//     let data = { firstName, lastName, gender, dob };

//     function submit() {
//         fetch('http://localhost:3001/createprofile', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then((res) => {
//             console.log(res)
//         }).catch((err) => {
//             console.log('Error is ', err)
//         })
//     }

//     return (
//         <div className='container'>
//             <form style={{ marginLeft: '2em' }}>
//                 <h1 id='label' >Creat Profile</h1>
//                 {/* <input id='firstName' value={firstName} placeholder='First Name' onChange={(e) => { regFirstName(e.target.value) }} />
//                 <input id='lastName' value={lastName} placeholder='Last Name' onChange={(e) => { regLastName(e.target.value) }} />
//                 <input id='gender' value={gender} placeholder='Gender' onChange={(e) => { regGender(e.target.value) }} />
//                 <input id='dob' type='date' value={dob} placeholder='Date of Birth' onChange={(e) => { regDob(e.target.value) }} /> */}
//                 <Link to='/otherDetails'><button onClick={submit} className='next' > Next</button></Link>
//             </form>
//         </div>
//     )
// }

// export default Creatprofile;