import React, { useEffect,useState } from 'react'
import './car-preview.css'
import Table from 'react-bootstrap/Table'
import CarItem from './car-items/car-items.jsx'

const CarPreview=({societies,area,carInArea})=>{
    const societiesName=Object.keys(societies);
    const vehicles=Object.values(societies);
    const [carInAr,setCarInAr]=useState([]);

    let carInAppArr=[]
    const carInAppartment=(num)=>{
        carInAppArr.push(num);
    }
    
    useEffect(()=>{
      const a=carInAppArr.reduce((acc,ele)=>{
        return acc=acc+ele
      });
      carInArea(a)
      setCarInAr(carInAppArr);
    },[]);

  return(
      <>
      <Table bordered >
          <thead >
          <tr >
              {societiesName.map((element,i)=>(
                <th className="heading" style={{fontSize:15,color:'white',background:'black',textAlign:"center"}}>{element} ({carInAr[i]})</th>
              ))}
          </tr>
          </thead>
          <tbody>
         
          {vehicles.map((element,i)=>(
           <td style={{padding: 0}}><CarItem address={`${area}/${societiesName[i]}`} carInAppartment={carInAppartment} vehicles={vehicles[i]} /></td>
          ))}  
          </tbody>
      </Table>
      </>
  )

}

export default CarPreview;