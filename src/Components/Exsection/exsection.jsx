import React, { useEffect, useState } from 'react'
import TablePreview from './table-preview/table-preview.jsx'
import './exsection.css'
import Table from 'react-bootstrap/Table'


const Exsection=({area,societies})=>{
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
            <TablePreview area={area} carInArea={carInArea} societies={societies}/>
            </tbody>
      </Table>  
    </div>
    </div>
    </div>
  )

}

export default Exsection;

