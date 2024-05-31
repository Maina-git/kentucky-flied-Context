import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";



function Footer() {
  return (
    <div className="footer">
      <div className="products">
        <h1>Products</h1>
        <ul>
          <li>Lunchbox crunch burger</li>
          <li>Streetwise</li>
          <li>Colonel Burger</li>
          <li>Lunchbox Wings</li>
          <li>Burgers</li>
        </ul>
      </div>
      <div className="products">
        <h1>Products</h1>
        <ul>
          <li>Twisters</li>
          <li>Sticky Wings</li>
          <li>Chicken</li>
          <li>Buckets</li>
          <li>Many More</li>
        </ul>
      </div>
      <div className="products">
        <h1>Social Media</h1>
        <ul>
          <li>Kfcfacebook <FaFacebookF/> </li>
          <li>kfcX <FaXTwitter/>  </li>
          <li> kfc@insta <CiInstagram/> </li>
          <li>kfccontactus <FaWhatsapp/>  </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer;
