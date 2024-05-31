import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({isAuth}){
let navigate=useNavigate();

useEffect(()=>{
  if(!isAuth){
  navigate('/login');
  }
},[]);

  return (
    <div className="homepage">
<div className="content">
    <img src="/images/KFC-Logo.png" width="200px" alt="" />
    <h1>Kentucky Fried Chicken</h1>
    <p>It's Finger Licker Good</p>
    <Link to="/products"><button>Order Now</button></Link>
</div>
    </div>
  )
}

export default Home;
