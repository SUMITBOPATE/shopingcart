import React from 'react'
import "../card.css";

export default function Girlcomp({data}) {
  return (
<div className='parent'>
    {

        data.girlData.map((ele) => {
            return (
                <div className='card-container'>
                    <div className='image-container'>
                        <img src={ele.image} />
                    </div>
                    <div className='details'>
                        <div className='title'>{ele.title}</div>
                        <div className='price'>Rs.{ ele.price}</div>
                        <div className='quantity'>{ ele.quantity}</div>
                        <div className='rating'>#{ele.id}</div>
                         {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                         <button className='button' onClick={()=>data.addToCart(ele)}>Add to Cart</button>
                    </div>
                </div>
            )
        })



        }
        </div>
  )
}
