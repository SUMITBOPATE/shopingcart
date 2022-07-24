import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Header({setInputState}){
console.log(setInputState);


function manageInput(e){
    let { value } = e.target
    console.log(value);
    setInputState.setInputState(value)

}

return(
<>
<div className="header">
                <div className="img-container">
                    {/* from src folder  */}
                    {/* <img src={amzonImg} />   */}
        {/* from public folder */}
                    
               <Link to="/">  <img src="../image"/></Link>
                    {/* we are writing any js value */}
                </div>
                <div className="content-container">
                    <div className="hello">Hello</div>
                    <div className="Address">Select your address</div>
                </div>
                <div className="search-parent">
  <input type="text" placeholder="Search your product here" onChange={manageInput}/>
                </div>
                <div className='carts' style={{ color: "white", fontWeight:"bold"}}>
                   <Link to="/cartpage" style={{ textDecoration: "none" }}>
                 
                   <div className="cart"><i class="fas fa-shopping-cart" />cart</div></Link> 
                  
                    <div className='box'>{setInputState.cart.length}</div>
   
                    </div>
                    <div className="return">Return</div>
                </div>
                    
      
      </>



)



}