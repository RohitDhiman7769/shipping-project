import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Poststepone.css'
import axios from 'axios';

function Poststepone() {
  const [Selectedmedia, setSelectedImg] = useState(null);
  const [file, setFile] = useState(null);
  const [textareaValue, setTextareaValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // console.log(textareaValue)

  function handleImageChange(event) {

    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  const token = localStorage.getItem('token')

  function Uploadimg() {
    if (Selectedmedia) {
      const formData = new FormData();
      formData.append('postDescription', textareaValue)
      formData.append('file', file);
      formData.append('productQuantity', quantity)
      formData.append('productPrice', price)
      

      axios.post('http://localhost:3001/add-post', formData, {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div style={{backgroundColor:'rgb(224, 226, 246)', height:'47em', paddingTop:'1em'}}>
    <div className="uploadDp-container">
      <h1 id="label">Upload Post</h1>
      {Selectedmedia && (
        <img src={Selectedmedia} alt="Selected" style={{ height: '25em', width: '30em' }} />
      )}
      <form style={{ alignSelf: 'center', justifyContent: 'center' }} onSubmit={(event) => event.preventDefault()} >
        <input type="file" style={{ marginBottom: '1em', marginLeft: '8em' }} accept="image/*" onChange={handleImageChange} />
      </form>
      <textarea style={{ height: '3em', width: '30em' }} value={textareaValue} onChange={(event) => setTextareaValue(event.target.value)} ></textarea>
      <label >Product Quantity: </label>
        <input type='number' onChange={(e)=>{setQuantity(e.target.value)}}></input>
      <label>Product Price: </label>
        <input type='number' onChange={(e)=>{setPrice(e.target.value)}}></input>
      <Link to="/Profile"><button className="next" onClick={Uploadimg}>Next</button></Link>
    </div>
    </div>
  );
}

export default Poststepone;
