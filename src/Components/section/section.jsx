import React, {useEffect, useState } from 'react'
import './section.css'
import Table from 'react-bootstrap/Table'


const Section=({component2:Component2,area,societies})=>{
  const [carInAr,setCarInAr]=useState("Loading");

 
    const carInArea=(num)=>{
      setCarInAr(num);
    }
  return(
    
    <div class="card">
    <div class="card-body">
    <div className="Section">
    <div class="d-flex justify-content-between">
    <h1 className="heading" style={{fontSize:20,color:'black',fontWeight:"700"}}>{area} ({carInAr})</h1>
    </div>
      <Table bordered responsive >
            <tbody>
            <Component2 area={area} carInArea={carInArea} societies={societies}/>
            </tbody>
      </Table>  
    </div>
    </div>
    </div>
  )

}

export default Section;

