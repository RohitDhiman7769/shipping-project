import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Home.css'
import like from '../projectimg/heart.png';
import setlike from '../projectimg/likeicon2.png'
import Comment from '../projectimg/comment.png';
import Share from '../projectimg/send.png';
import Cart from '../projectimg/shopping-bag.png';
import Save from '../projectimg/bookmark.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    })
    const [onclicklike, setlikes] = useState(like)
    const [isFirstImage, setIsFirstImage] = useState(true);
    const [fetchComment, setFetchComment] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [homePageData, homePageSetData] = useState([])
    const [postComment, setComment] = useState()




    useEffect(() => {
        axios.get('http://localhost:3001/Home-page', {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data)
            homePageSetData(response.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    async function postlike(postid) {
        if (isFirstImage) {
            setlikes(setlike)
            try {
                const response = await axios.post('http://localhost:3001/setpostlike', { postid }, {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        } else {
            setlikes(like)
            try {
                const response = await axios.post('http://localhost:3001/removepostlike', { postid }, {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
        setIsFirstImage(!isFirstImage);
    }



    async function comment(val) {
        setIsModalOpen(true)
        try {
            const response = await axios.post('http://localhost:3001/fetch-comments', { val }, {
                headers: {
                    Authorization: `Beares ${token}`
                }
            })
            // console.log(response.data[0].user_comment)

            setFetchComment(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    function closemodalcontent() {
        setIsModalOpen(false)
    }
    const ModalContent = () => {
        return (
            <div className="Commentsection-container">
                <h2>Following Users</h2>
                <div id="innerdiv">
                    {fetchComment.map((value, key) => {
                        return (
                            <div key={key}>
                                {/* <img id='profileimage' src=''></img> */}
                                <p style={{ marginLeft: '3em', marginBottom: '2em' }}>{value.user_comment}</p>
                            </div>
                        )
                    })}
                </div>
                <button className='commentbtn' onClick={closemodalcontent}>Close</button>
            </div>
        )
    };

    function handleKeyDown(userpostid, e) {
        if (e.key == 'Enter') {
            sentComment(userpostid, e)
        }
    }

    async function sentComment(valueOne, e) {
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:3001/send-comment', { postComment, valueOne }, {
                headers: {
                    Authorization: `Beares ${token}`
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
        setComment('');

    }




    async function sharebtn(value) {
        try {

            navigate('/following-users', { state: { post_id: value } })
        } catch (err) {
            console.log(err)
        }

    }

    async function cartbtn(id) {
        try {
            const response = await axios.post('http://localhost:3001/add-cart', { id }, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    function profileRedirect(val) {
        try {
            navigate("/Account-check", { state: { userid: val } })

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            < div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    {/* header */}
                    <div className='header'></div>
                    <div className='home-main'>

                        {homePageData.map((post, index) => {
                            return (
                                <div key={index} className='post-section'>

                                    <div id="dp-and-name-div">
                                        <img id="postuserdp" src={`http://localhost:3001/images/${post.profile_img}`} alt="User Profile" />
                                        <div style={{ height: '1em' }}>
                                            <p style={{ textDecoration: 'none' }} onClick={() => profileRedirect(post.userid)} id="postidname">{post.user_firstname}</p>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: '2em', fontSize: 'smaller' }}>
                                        <p>{post.user_post_caption}</p>
                                        <span>Product Quantity: </span>
                                        <p style={{ display: 'inline-block' }}></p>
                                        <br />
                                        <span>Product Price: </span>
                                        <p style={{ display: 'inline-block' }}></p>
                                    </div>
                                    <div style={{ marginLeft: '1.5em' }}>
                                        <img id="userpostimage" src={`http://localhost:3001/images/${post.user_post_img_url}`} alt="User Post" />
                                    </div>
                                    <div id="likes-and-others">
                                        {/* like-button */}

                                        <img src={onclicklike} id='postlike' onClick={() => postlike(post.user_postid,)}></img>

                                        {/* comment button */}
                                        <img src={Comment} id="postcomment" alt="Comment" onClick={() => comment(post.user_postid)} />

                                        {/* //sharebtn */}
                                        <img src={Share} id="postshare" alt="Share" onClick={() => sharebtn(post.user_postid)} />


                                        {/* cartbtn */}
                                        <img src={Cart} id="postcart" alt="Cart" onClick={() => cartbtn(post.user_postid)} />

                                        {/* save-btn */}
                                        <img src={Save} id="postsave" alt="Save" />
                                    </div>
                                    <form >
                                        <input className='commentInput' value={postComment} placeholder='Comment ' onChange={(e) => { setComment(e.target.value) }} onKeyDown={(e) => handleKeyDown(post.user_postid, e)} ></input>
                                    </form>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-background">
                    {/* Render the modal content */}
                    <ModalContent fetchComment={fetchComment} />
                </div>
            )}
        </>
    )
}