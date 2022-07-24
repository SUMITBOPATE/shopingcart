import React from 'react'

import "./card.css"
import data from "../Data"
import {useState} from "react";


export default function Card({inputState}) {
   
  

   let filteredData=data.filter((ele)=>ele.type.includes(inputState.inputState.toLowerCase()));
   
   
   
   
  return (
    <>
    <div className='parent'>
    {
       filteredData.length==0?
        data.map((ele) => {
            return (
                <div className='card-container'key={ele.id}>
                
                    <div className='image-container'>
                        <img src={ele.image} />
                    </div>
                    <div className='details'>
                        <div className='title'>{ele.title}</div>
                        <div className='price'> Rs.{ ele.price}</div>
                        <div className='quantity'>{ele.quantity}</div>
                        {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                        <div className='rating'>#{ele.id}</div>
                    {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                    <button className='button' onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                    </div>
                </div>
            )
        }):filteredData.map((ele) => {
                    return (
                        <div className='card-container'key={ele.id}>
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>{ ele.price}</div>
                                <div className='quantity'>{ ele.quantity}</div>
                               
                                <div className='rating'>#{ele.id}</div>
                                {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                                <button className='button' onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                            </div>
                        </div>
                        )
  
                    }
                    )
    }
          </div>
         </>
  )
  
}
