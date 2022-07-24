import React from 'react'

import data from "../../Data.js"
import BoyComp from './Boycomp.js'

export default function Boy({addToCart}) {
  console.log(Object)
  let boyData = data.filter(ele=>ele.type=="boy")
  return (
    <>
    <BoyComp data={{boyData,addToCart}}/>
    </>
  )
}


