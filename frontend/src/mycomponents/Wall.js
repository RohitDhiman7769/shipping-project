import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Wall.css';
import Comment from '../projectimg/comment.png';
import like from '../projectimg/heart.png';

import Share from '../projectimg/send.png';
import Cart from '../projectimg/shopping-bag.png';
import Save from '../projectimg/bookmark.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Wall() {

    const [walldata, setWallData] = useState([]);
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    })

useEffect(()=>{
    try {
        axios.get('http://localhost:3001/wall', {
           headers: {
               Authorization: `bearer ${token}`
           }
       }).then((response)=>{
           console.log(response.data[0])
           setWallData(response.data)
       }).catch((err)=>{
           console.log(err)
       })

   } catch (err) {
       console.log(err)
   }

},[])
   
    return (

        <div style={{ display: 'flex' }}>
            <div>
                <Navbar />
            </div>
            <div>
                {/* header */}
                <div className='wall-header'></div>
                <div className='wallmain'>

                    {walldata.map((value, index) => (

                        <div key={index}  className='post-section' >
                            <div id="dp-and-name-div">
                                <img id="postuserdp" src={`http://localhost:3001/images/${value.profile_img}`} alt="User Profile" />
                                <div style={{ height: '1em' }}>
                                    <p style={{ textDecoration: 'none' }} id="postidname">{value.user_firstname}</p>
                                </div>
                            </div>
                            <div style={{ paddingRight: '2em', fontSize: 'smaller' }}>
                                <p>{value.user_post_caption}</p>
                                <span> Product Quantity</span>
                                <p style={{ display: 'inline-block' }}>{value.quantity}</p>
                                <br />
                                <span>Product Price: </span>
                                <p style={{ display: 'inline-block' }}>{value.price}</p>
                            </div>
                            <div style={{ marginLeft: '1.5em' }}>
                                <img id="userpostimage" alt="User Post" src={`http://localhost:3001/images/${value.user_post_img_url}`} />
                            </div>
                            <div id="likes-and-others">
                            <a href="#" >
                                    <img id="like" src = {like} alt="Comment" />
                                </a>
                                <a href="#" >
                                    <img id="postcomment" src = {Comment} alt="Comment" />
                                </a>
                                <Link to='/following-users' >
                                    <img src={Share} id="postshare" alt="Share" />
                                </Link>
                                <a href="#" >
                                    <img src={Cart} id="postcart" alt="Cart" />
                                </a>
                                <a href="#" >
                                    <img src={Save} id="postsave" alt="Save" />
                                </a>
                            </div>
                            <input className='commentInput' ></input>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}