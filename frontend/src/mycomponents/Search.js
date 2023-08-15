import React, { useState } from 'react';
import Navbar from './Navbar';
import './Search.css';
export default function Search() {
    const [value, setvalue] = useState('')

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    {/* header */}
                    <div className='search-header'></div>
                    <div className='search-main'>
                        <input type='text' onChange={(e)=>{setvalue(e.target.value)}} > </input>

                    </div>

                </div>
            </div>
</>
    )
}