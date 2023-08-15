import React, {  useEffect, useState } from 'react';
import Navbar from './Navbar';
import './AccountCheck.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';




export default function AccountCheck() {

    const [showButton, setShowButton] = useState(true);
    const [Button, setButton] = useState(false);
    // const [img , setImg ] = useState(false)


    let location = useLocation();
    const userid = location.state.userid
    console.log('location: ', userid)

    const [Data, setdata] = useState({})

    const token = localStorage.getItem('token')

    async function getData() {

        const response = await axios.post('http://localhost:3001/user-profile', { userid }, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
        )
        setdata(response.data)
        // if(response.data.profile_img){
        // setImg(true)
        // }
        
    }
    useEffect(() => {
        getData()
    }, [])


    async function follow() {

        try {
            const response = await axios.post('http://localhost:3001/follow',{userid}, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
        setShowButton(!showButton);
        setButton(!Button);

    }
    const headers = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }
    async function unfollow() {

        try {
            const response = await axios.post('http://localhost:3001/unfollow',{userid},headers)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
        setShowButton(!showButton);
        setButton(!Button);
    }

    return (

        <div className='AccountCheck-container' >
            <div>
                <Navbar />
            </div>
            <div >
                {/* header */}
                <div className='AccountCheck-main'>
                    {/* user_email */}

                    <div style={{ display: 'flex', paddingLeft: "37px", height: '18em', paddingTop: '1em' }}>
                        <div style={{ width: '29em', marginLeft: '0.5em' }} >
                            <h3>{Data.user_email}</h3>
                       <img className='userdp' src={`http://localhost:3001/images/${Data.profile_img}`} />
                            <p className='username'>{Data.user_firstname}</p>
                            <p className='userbio'>{Data.user_bio}</p>
                        </div>
                        <div style={{ marginLeft: "10em", width: "26em", justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', marginLeft: "10em", width: "26em", justifyContent: 'space-between' }}>
                                <div style={{ display: 'initial' }}>
                                    <p className='posts' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Posts</p>
                                    <p className='totalposts' style={{ textAlign: 'center', fontSize: '24px' }}>12</p>
                                </div>

                                <div style={{ display: 'initial' }}>
                                    <p className='followers' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Followers</p>
                                    <p className='totalfollowers' style={{ textAlign: 'center', fontSize: '24px' }}>2112</p>
                                </div>
                                <div style={{ display: 'initial' }}>
                                    <p className='following' style={{ display: 'flex', alignitems: 'center', fontSize: '30px' }}>Following</p>
                                    <p className='totalfollowing' style={{ textAlign: 'center', fontSize: '24px' }}>2121</p>
                                </div>
                            </div>
                            <div>
                              {showButton &&  <button className='followBtn' onClick={follow}>Follow</button>} 
                              {Button &&  <button className='unfollowBtn' onClick={unfollow}>Unfollow</button>} 

                            </div>
                        </div>
                    </div>
                    <div className='user-post-section'>
                        {Data?.post?.map((post) => {
                            return(
                            <img className='post-img' src={`http://localhost:3001/images/${post.user_post_image_url}`}></img>
                       )
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}





 // useEffect(() => {
    //     try {

    //         axios.get('http://localhost:3001/fetch-following', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //             .then((response) => {
    //                 console.log(response)
    //                 setdata(response.data)
    //             }).catch((err) => {
    //                 console.log(err)
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }


    // }, [])
