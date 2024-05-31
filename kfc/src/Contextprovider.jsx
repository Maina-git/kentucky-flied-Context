import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const  Context=createContext({});

function Contextprovider(props) {


  let ProductInfo=[
    {
    Name:"Lunchbox wings",
    Price:"18.99$ ", 
    Description:"kfc products",
    },
    {
      Name:"Buckets ",
    Price:"15.99$", 
    Description:"kfc products ",
    },
    {
      Name:"Streetwise ",
    Price:"8.99$",
    Description:"kfc products",
    },
    {
    Name:"Pieces ",
    Price:"5$",
    Description:"kfc products",
    },
    ];

const [count, setCount]=useState(0);

function myCount(){
setCount(prev=>prev+=1);
}

const contextValue={
    count, 
    myCount,
    setCount,
    ProductInfo
}
  return (
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
)
}

export default Contextprovider;
