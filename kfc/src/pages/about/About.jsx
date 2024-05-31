import React from 'react'
import "./About.css"
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function About({isAuth}) {
let navigate=useNavigate();

useEffect(()=>{
if(!isAuth){
navigate("/login");
}
},[]);

  return (
    <div className="about">
      <div className="image"></div>
    <div className="content">
      <img src="/images/KFC-Logo.png" className="img" alt="" />
    <h1>About Us</h1>
    <p> a subsidiary of Yum! Brands, is the world's most popular chicken restaurant
      chain spesializing in OriginalRecipe, Extra Crispy Kentucky Grilled 
      Chicken, Extra Crispy Boneless, with home styles sides, Hot Wings, and freshly made
      chicken sandwiches.
      Most loved and fastest growing retail chains in the world.
    </p>
    </div>
    </div>
  )
}
export default About;
