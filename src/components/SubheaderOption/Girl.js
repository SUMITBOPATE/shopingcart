import React from 'react'
import Girlcomp from './Girlcomp';
import  data from "../../Data.js"


export default function Girl({addToCart}) {
  console.log(Object)
  let girlData = data.filter(ele=>ele.type=="girl")
  return (
    <Girlcomp data={{girlData,addToCart}}/>
  )
}
