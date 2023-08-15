import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Profile.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Profile() {

    const token = localStorage.getItem('token')


    const [profiledata, setProfiledata] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    })
    useEffect(() => {
        try {

            axios.get('http://localhost:3001/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    console.log(response.data)
                    setProfiledata(response.data)
                }).catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }


    }, [])



    return (

        <div className='profile-container' >
            <div>
                <Navbar />
            </div>



                        <div  className='profile-main'>
                            <div className='main-header'>
                                <p id='emailview'>{profiledata.user_email}</p>
                            </div>
                            <div style={{ display: 'flex', paddingLeft: "37px", height: '15em' }}>
                                <div style={{ width: '30em', marginLeft: '0.5em' }} >
                                    <img className='userdp'  src={`http://localhost:3001/images/${profiledata.profile_img}`} />
                                    <p className='username'>{profiledata.user_firstname}</p>
                                    <p className='userbio'>{profiledata.user_bio}</p>
                                </div>
                                <div style={{ display: 'flex', marginLeft: "10em", width: "26em", justifyContent: 'space-between' }}>
                                    <div style={{ display: 'initial' }}>
                                        <p className='posts' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Posts</p>
                                        <p className='totalposts' style={{ textAlign: 'center', fontSize: '24px' }}></p>
                                    </div>

                                    <div style={{ display: 'initial' }}>
                                        <p className='followers' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Followers</p>
                                        <p className='totalfollowers' style={{ textAlign: 'center', fontSize: '24px' }}></p>
                                    </div>
                                    <div style={{ display: 'initial' }}>
                                        <p className='following' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Following</p>
                                        <p className='totalfollowing' style={{ textAlign: 'center', fontSize: '24px' }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className='addpostdiv' >
                                <Link to='/Poststepone'> <button className='postadd'>Add Post +</button></Link>
                            </div>

                              <div className='posts-section'>
                                {profiledata?.posts?.map((post)=>{
                                    return(

                                        <img className='post-images' src={`http://localhost:3001/images/${post.user_post_image_url}`}></img> 
                                    )
                                }
                                )}
                                
                            </div> 
                        </div>

                    </div>


    )
}