import React, { useState, useEffect } from 'react';
import './Following-users.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function FollowingUsers() {
    const navigate = useNavigate()
    const location = useLocation()
    const postid = location.state.post_id;

    const token = localStorage.getItem('token');

    const [following, setFollowing] = useState([]);
    const [selectId, setSelectId] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/fetch-following', {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                });
                setFollowing(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

  
    async function selectedAccount(paraOne) {
            const newId = [...selectId, paraOne] 
            setSelectId(newId)
        console.log(selectId)
    }

    async function sendPost(postId) {
        try {
            const response = await axios.post('http://localhost:3001/share-post', {selectId, postId }, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
        navigate('/Home')
    }


    return (
        <div className="Followingusers-container">
            <h2>Following Users</h2>
            <div className="innerDiv">
                {following.map((user, index) => (
                    <div key={index} className="inner-innerdiv">
                        <div style={{ height: '3.5em' }}>
                            <img className="usersprofile-image" src={`http://localhost:3001/images/${user.profile_img}`} alt="Profile" />
                            <p className="selected-user-email">{user.user_firstname}</p>
                        </div>

                        <div>
                            <button className="selectBtn" onClick={() => selectedAccount( user.userid)}>Select</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="sendBtn" onClick={() => sendPost(postid)}>Send</button>
        </div>
    );
}

export default FollowingUsers;


