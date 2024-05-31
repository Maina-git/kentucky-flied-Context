import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth"
import { Auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';


function Navbar({isAuth, setIsAuth}) {
  let navigate=useNavigate();
const logout=()=>{
signOut(Auth).then((result)=>{
  localStorage.clear();
setIsAuth(false);
window.location.pathname="/login"
})
}

  return (
    <div className="navbar">
    <nav className="logo">
        <img src="/images/KFC-Logo.png" width="100px" alt="" />
    </nav>
    <div className="links">
     {
      isAuth?
        (<div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link><button onClick={logout}>SIGN OUT</button></Link>
        </div>
        ):(<Link to="/login">Sign In</Link>)
}
    </div>
    <div className="sidebar">
     {
      isAuth?
        (<div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link><button onClick={logout}>SIGN OUT</button></Link>
        </div>
        ):(<Link to="/login">Sign In</Link>)
}
    </div>



  </div>
  )
}
export default Navbar;














