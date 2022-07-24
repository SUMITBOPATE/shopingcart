import React from 'react'
import "./cart.css"

import { useState } from 'react'

export default function Cart({ cart }) {



    return (
      <>
        {
        cart.cart.length == 0 ?
          <div className='cart-container'>
            no product in cart.
          </div>
          :
          cart.cart.map((ele) => {
            return (
   <div className='cart-container'key={ele.id}>
                            <div className='container'>
                                <img src={ele.image} />
                            </div>
                            <div className='product-details'>
                                <div className='cart-title'>{ele.title}</div>
                                <div className='total'>
                  <div>Total Price</div>
                  <div>{ele.price * ele.quantity} </div>
                </div>
                <div className='quantity-container'>
                  <div>Quantity</div>
                  <button onClick={()=>cart.addToCart(ele) }>+</button>
                  <div>Pcs {ele.quantity}</div>
                  <button onClick={()=>cart.deleteToCart(ele)}>-</button>
                </div>
                <div className='delete'>
                  <button onClick={()=>cart.removeCart(ele)}>Delete from Cart</button>
                </div>
                                {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                                {/* <button className='cart-button' onClick={()=>cart.addToCart(ele) }>Added to cart</button> */}
                            </div>
                        </div>
            )
          }
          )
        }
      </>
    )
  }
  
