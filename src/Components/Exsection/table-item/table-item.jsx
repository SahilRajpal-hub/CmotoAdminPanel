
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import './table-item.styles.css'
import firebase from '../../../firebase/firebase.utils.js'
import { useEffect, useState } from 'react'




// a.map((element)=><h4>{element}</h4>)
const TableItem=({Employees,address,carInAppartment})=>{
   const EmployeesName=Object.keys(Employees)
   const Employeedetails=Object.values(Employees)
   

   useEffect(()=>{
   },[])

   
const gg =function (carnums){
    if(!carnums){
       return [];
    }
   carnums=carnums.split(", ")
   carnums.pop();
   return carnums;

}

const col=function(el){
    let co="red"
    firebase.database().ref(`Car Status/${el}/status`).on('value',(snapshot) => {
        console.log(snapshot.val())
        console.log("color changed with " + snapshot.val())
       if(snapshot.val()==="cleaned"){
           co="lightgreen"
       }else if (snapshot.val()==="scanned"){
           co="yellow"
       }else if(snapshot.val()==="In waiting"){
           co="red"
       }
    })
    return co;
}


const image=function(el){
    let url=" "
    firebase.database().ref(`Car Status/${el}/Work History/${getTodayDate()}/Photo Url 4`).on('value',(snapshot) => {
        console.log(snapshot.val())
        url = snapshot.val()
    })
    return url;
}

function getTodayDate() {
    var todayUs = new Date()
    var offset = '+5.5' // since database belongs to US
    var utc = todayUs.getTime() + todayUs.getTimezoneOffset() * 60000 // therefore converting time to IST
    var today = new Date(utc + 3600000 * offset)
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()
  
    today = yyyy + '-' + mm + '-' + dd
    // console.log(today);
    return today
  }
      




   carInAppartment(EmployeesName.length);

    return(
        <>
            <Table bordered responsive >
            <thead>
            {EmployeesName.map((Name,i)=>(
                    <td style={{textAlign:"center",fontSize:14,fontWeight:600,color:"black"}} >{Employeedetails[i].Name}</td>
            ))} 
        </thead>
        <tbody>
            {
               Employeedetails.map((ele,i)=>(
                   <td style={{padding:0}}>
                    {
                      gg(ele.Cluster).map((el,j)=>(
                        
                        <h3 style={{textAlign:"center",border:"1px solid #e9ecef",marginBottom:0.75,padding:20,fontSize:14,color:"black",backgroundColor:col(el)}} > {el} </h3>  
                      ))
                    
                    }
                    </td>
               )) 
            }     
        </tbody>
            </Table>
        </>
    )
}

export default TableItem;

/**/