import React, { useEffect,useState } from 'react'
import './exlive-preview.css'
import firebase from '../../../firebase/firebase.utils.js'
import Table from 'react-bootstrap/Table'
import ExliveItem from './exlive-items/exlive-items.jsx'

const ExlivePreview=({societies,area,carInArea})=>{
    const societiesName=Object.keys(societies);
    const Employees=Object.values(societies);
    const [carInAr,setCarInAr]=useState([]);
    const [map,setMap] = useState({})

    let carInAppArr=[]
    const carInAppartment=(num)=>{
        carInAppArr.push(num);
    }
    
    useEffect(()=>{
      console.log("carInAppArea")
      const a=carInAppArr.reduce((acc,ele)=>{
        return acc=acc+ele
      });
      console.log(a);
      carInArea(a)
      setCarInAr(carInAppArr);
      reload()
    },[]);

    const reload = () => {
      firebase.database().ref('Car Status').on('value',(snapshot)=>{
        setMap(snapshot.val())
      })
    }

    

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
     
          {Employees.map((element,i)=>(
            
           <td style={{padding: 0}}><ExliveItem address={`${area}/${societiesName[i]}`} carInAppartment={carInAppartment} Employees={Employees[i]} /></td>
         
           ))} 
         
          </tbody>
      </Table>
      </>
  )

}

export default ExlivePreview;