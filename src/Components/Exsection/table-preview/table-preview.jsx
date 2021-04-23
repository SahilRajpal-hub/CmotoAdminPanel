import React, { useEffect,useState } from 'react'
import TableItem from '../table-item/table-item.jsx'
import './table.preview.css'
import firebase from '../../../firebase/firebase.utils.js'
import Table from 'react-bootstrap/Table'

const TablePreview=({societies,area,carInArea})=>{
    const societiesName=Object.keys(societies);
    const Employees=Object.values(societies);
    const [carInAr,setCarInAr]=useState([]);
    var map = new Object()

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
      col()
    },[map]);

    const col=function(el){
      let co="red"
      firebase.database().ref(`Car Status`).on('value',(snapshot) => {
          console.log(snapshot.val())
          
         map['test']=snapshot.val()
         console.log(map['test'])
      })
      return co;
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
            
           <td style={{padding: 0}}><TableItem address={`${area}/${societiesName[i]}`} carInAppartment={carInAppartment} Employees={Employees[i]} /></td>
         
           ))} 
         
          </tbody>
      </Table>
      </>
  )

}

export default TablePreview;