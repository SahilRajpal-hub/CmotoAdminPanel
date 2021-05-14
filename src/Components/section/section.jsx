import React, {useEffect, useState } from 'react'
import './section.css'
import Table from 'react-bootstrap/Table'


const Section=({address,component2:Component2,area,societies})=>{
  const [carInAr,setCarInAr]=useState("");

 
    const carInArea=(num)=>{
      setCarInAr(num);
    }
  return(
    
   
    <div className="Section mb-4">
    <div class="d-flex justify-content-start" style={{borderBottom:"solid 2px"}}>
    <h1 className="heading mb-2" style={{fontSize:20,color:'black',fontWeight:"700"}}>{area}{carInAr?`(${carInAr})`:null}</h1>
    </div>
    <div class="mt-1">
    <Component2 area={area} address={address} carInArea={carInArea} societies={societies}/>   
    </div>
    </div>
   
  )

}

export default Section;

