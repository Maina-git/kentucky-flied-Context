import React from 'react'
import "./Login.css"
import { Auth, provider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
let navigate=useNavigate();
function login(){
  signInWithPopup(Auth, provider).then((result)=>{
localStorage.setItem("isAuth", true);
setIsAuth(true);
navigate("/");
  });
}
  return (
    <div className="login">
        <img src="/images/KFC-Logo.png" alt="" />
        <p>It's Finger Licker Good</p>
        <nav>
        <h1>Sign in With Google To Continue</h1>
      <button onClick={login}><FcGoogle className="icon"/>  Sign in With Google</button>
        </nav>
    </div>
  )
}

export default Login;
