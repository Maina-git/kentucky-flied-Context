import React from 'react'
import "./Buttons.css"
import { Context } from '../../Contextprovider';
import { useContext } from 'react';

function Buttons() {

const {setCount}=useContext(Context);

  return (
    <div className="buttons">
      <button onClick={()=>setCount(0)}></button>
      <button onClick={()=>setCount(1)}></button>
      <button onClick={()=>setCount(2)}></button>
      <button onClick={()=>setCount(3)}></button>
    </div>
  )
}
export default Buttons;





