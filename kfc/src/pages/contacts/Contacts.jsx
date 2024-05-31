import React from 'react'
import "./Contacts.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Contacts({isAuth}){
let navigate=useNavigate();
useEffect(()=>{
  if(!isAuth){
    navigate("/login");
  }
},[])

  return (
    <div className="contacts">
        <div className="left">
<img src="/images/KFC-Logo.png" alt="" />

        </div>
        <div className="right">
<h1>Contact Us</h1>
<nav>
<label htmlFor="email">Email:</label>
<input type="Email" id="email" placeholder="Enter Email"/>
</nav>
<br/>
<nav>
<label htmlFor="Message">Message:</label>
<input type="text" id="message" placeholder='Enter Message' />
</nav>
<button>Send</button>
</div>
      
    </div>
  )
}

export default Contacts;
