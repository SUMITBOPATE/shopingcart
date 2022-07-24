import React from 'react'
import "./Subheader.css"
import { Link } from 'react-router-dom'
export default function Subheader() {
  return (
    <>
    <div className="subheader">
       <Link to="/boy" style={{ textDecoration: "none" }}>
            <div className='boy'>Boys</div>
      </Link>
        <Link to="/girl" style={{ textDecoration: "none" }}>
            <div className='girl'>Girls</div>
        </Link>
       
      
        
    
    </div>
</>
  )
}
