import React from 'react'
import "./Products.css"
import Buttons from '../../components/buttons/Buttons';
import Info from '../../components/info/Info';
import { Context } from '../../Contextprovider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Products({isAuth}) {
    let navigate=useNavigate();

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[]);


const {count, ProductInfo}=useContext(Context);

if(count==0){
  return (
    <>
    <Buttons/>
    <Info data={ProductInfo[0]}/>
<img src="/images/fried-chicken-6550521_1280.jpg" className="products" alt="" />
    </>
    )
}
if(count==1){
    return (
        <>
<Buttons/>
<Info  data={ProductInfo[1]}/>
    <img src="/images/fried-chicken-250863_1280.jpg" className="products" alt="" />
        </>
 )
}
if(count==2){
    return (
    <>
    <Buttons/>
    <Info data={ProductInfo[2]}/>
    <img src="/images/food-3271156_1280.jpg" className="products" alt="" />
</>
 )
}
if(count==3){
    return (
        <>
        <Buttons/>
        <Info data={ProductInfo[3]}/>
        <img src="/images/food-7649874_1280.png" className="products" alt="" />
    </>
     )
}
}
export default Products;
