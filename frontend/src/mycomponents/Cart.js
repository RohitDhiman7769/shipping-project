import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Cart.css';
import axios from 'axios';
export default function Cart() {

    const [checked, setChecked] = useState(false);
    const [product, buyProduct] = useState(false)
    const [address, setAddress] = useState([])

    const [quantity, sendQuantity] = useState('')
    const [getAddress, sendAddress] = useState('')
    const [getCity, sendCity] = useState('')
    const [getState, sendState] = useState('')
    const [getCountry, sendCountry] = useState('')
    const [getPincode, sendPincode] = useState('')
    const [dob, sendDob] = useState('');





    const token = localStorage.getItem('token')
    useEffect(() => {

        axios.get('http://localhost:3001/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setAddress(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
console.log('address is:', address)

    function buyButton() {
        buyProduct(true)
    }

    async function getData(e) {
        if (!checked) {
            try {
                const response = await axios.get('http://localhost:3001/get-address', {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                })
                sendAddress(response.data[0].user_address)
                sendCity(response.data[0].user_city)
                sendState(response.data[0].user_state)
                sendCountry(response.data[0].user_country)
                sendPincode(response.data[0].user_pincode)
                setChecked(true)
            } catch (err) {
                console.log(err)
            }
        }
        if (checked) {
            sendAddress('')
            sendCity('')
            sendState('')
            sendCountry('')
            sendPincode('')
            setChecked(false)
        }
    }

    async function buyingProcess() {
        const data = { quantity, getAddress, getCity, getState, getCountry, getPincode, dob};
        try {
            const response = await axios.post('http://localhost:3001/Produc_buying', data, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            console.log(response)
            alert(`Thanks To Buy`)
        buyProduct(false)

        } catch (err) {
            console.log(err)
        }
    }

    const BuySection = ({ buyingProcess }) => {
        return (

            <div style={{ height: '38em', width: '35em', backgroundColor: 'lightgreen', paddingTop: '1em' }}>
                <h1 style={{ display: 'inline-block', borderBottom: '2px solid black', marginLeft: '6.5em' }}>BUYING</h1>
                <div id='quantitydiv'>
                    <label>Quantity: </label>
                    <input id='cart-quantity-input' placeholder='Mention Quantity' onChange={(e) => { sendQuantity(e.target.value) }}></input>
                </div>
                <div id='addressdiv'>
                    <label >Submit Address: </label>
                    <p id='yesTag' >Yes</p>
                    <input id='addressRadio' type='checkbox' checked={checked} onChange={getData}></input>

                </div>
                <div style={{ display: 'flex', height: '14em', marginTop: '1em' }}>
                    <div id='label_add-div'>
                        <label>Address:</label>
                    </div>

                    <div style={{ display: 'grid', marginLeft: '3em' }}>
                        <input style={{ marginBottom: '1em' }} id="" placeholder='Address' value={getAddress} onChange={(e) => { sendAddress(e.target.value) }} />
                        <input style={{ marginBottom: '1em' }} id="cart-password" placeholder='City' value={getCity} onChange={(e) => { sendCity(e.target.value) }} />
                        <input style={{ marginBottom: '1em' }} id='cart-firstname' placeholder='State' value={getState} onChange={(e) => { sendState(e.target.value) }} />
                        <input style={{ marginBottom: '1em' }} id='cart-lastname' placeholder='Country' value={getCountry} onChange={(e) => { sendCountry(e.target.value) }} />
                        <input style={{ marginBottom: '1em' }} id='cart-gender' placeholder='Pincode' value={getPincode} onChange={(e) => { sendPincode(e.target.value) }} />
                        <input style={{ marginBottom: '1em' }} id='cart-dob' type='date' onChange={(e) => { sendDob(e.target.value) }} />

                    </div>

                </div>
                <div id='amountdiv'>
                    <label id='amount-label'>Total Amount: </label>
                    <p id='amount-p-tag'>4378</p>
                </div>
                <button id='buybtn' onClick={buyingProcess}>BUY</button>
            </div>
        )
    }
    return (

        <div style={{ display: 'flex' }}>
            <div>
                <Navbar />
            </div>
            <div>
                {/* header */}
                <div className='cart-header'></div>
                <div className='cart-main'>
                    <div id='cart-inner-div'>
                        {address.map((value) => (
                        
                            <div id='cart-content-div'>
                                <p id='user-name' >Rohit_dhiman </p>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <img id='user-product-img' src={`http://localhost:3001/images/${value.user_post_img_url}`}></img>
                                    </div>
                                    <div style={{ marginLeft: '1em' }}>

                                        <div className='post-details'>
                                            <label id='about-label'>About: </label>
                                            <p className='' id='cart-about'>{value.user_post_caption}</p>
                                        </div>

                                        <div className='post-details'>
                                            <label id='price-label'>Price:  </label>
                                            <p id='cart-price' >{value.price}</p>
                                        </div>

                                        <div className='post-details'>
                                            <label id='quantity-label'>Quantity: </label>
                                            <p id='cart-quantity'>{value.quantity}</p>
                                        </div>


                                    </div>
                                </div>
                                <button id='buyBtn' onClick={buyButton}> BUY</button>
                            </div>

                        ) )}  
                    </div>
                </div>

            </div>
            {product && (
                <div className="modal-background">
                    {/* Render the modal content */}
                    <BuySection buyingProcess={buyingProcess} fetchaddress={{ getAddress, getCity, getState, getCountry, getPincode }} />
                </div>
            )}
        </div>

    )
}