import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Login from './pages/login/Login';
import Contextprovider from './Contextprovider';
import Products from './pages/products/Products';
import { useState } from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App(){

const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth", true));


  return (
    <Contextprovider>
   <Router>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/products" element={<Products isAuth={isAuth}/>}/>
        <Route path="/about" element={<About isAuth={isAuth}/>}/>
        <Route path="/contacts" element={<Contacts isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route/>
        <Route/>
      </Routes>
      <Footer/>
    </Router>
    </Contextprovider>
  )
}
export default App;








