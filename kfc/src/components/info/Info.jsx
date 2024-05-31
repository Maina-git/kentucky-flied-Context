import React from 'react'
import "./Info.css"

function Info(props){

const {Name, Price, Description}=props.data;

  return (
    <div className="info">
      <h1>Name:{Name}</h1>
      <h2>Price:{Price}</h2>
      <p>Description:{Description}</p>
    </div>
  )
}

export default Info;
