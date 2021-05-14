
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import './exlive-items.styles.css'
import firebase from '../../../../firebase/firebase.utils.js'
import React,{ useEffect, useState } from 'react'

// a.map((element)=><h4>{element}</h4>)
const ExliveItem=({Employees,address})=>{
   const EmployeesName=Object.keys(Employees)
   const Employeedetails=Object.values(Employees)
   

   useEffect(()=>{
   },[])

   
const gg =function (carnums){
    if(!carnums){
       return [];
    }
   carnums=carnums.split(",")
   return carnums;
}

const gl =function (carnums){
    if(!carnums){
       return 0;
    }
    let a=0;
   for(let i=0;i<carnums.length;i++){
        if(carnums[i]===","){
            a=a+1;
        }
   }
   return a+1;
}


let yes=0;
let no=0;
const col=function(el){
    let co="red"
    firebase.database().ref(`Car Status/${el}/status`).on('value',(snapshot) => {
       if(snapshot.val()==="cleaned"){
           co="lightgreen"
           yes=yes+1;
       }else if (snapshot.val()==="scanned"){
           co="yellow"
       }else if(snapshot.val()==="In waiting"){
           co="red"
           no=no+1;
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
    return today
  }
      
    return(
        <>
            <Table bordered responsive style={{marginBottom:0}}>
            <thead >
            {EmployeesName.map((Name,i)=>(
                    <td style={{textAlign:"center",fontSize:14,fontWeight:600,color:"black"}} >{Employeedetails[i].Name}</td>
            ))} 
        </thead>
        <tbody>
            {
               Employeedetails.map((ele,i)=>(
                   <td style={{padding:0}}>
                    <div style={{display:'none'}}>{yes=0}
                    {no=0}</div>
                    {
                     gg(ele.Cluster).map((el,j)=>(
                        <h3 style={{textAlign:"center",marginBottom:0.75,padding:15,fontSize:14,color:"black",backgroundColor:col(el)}} ><Link style={{fontSize:14,color:'black',textAlign:"center"}} to={`/carinfo?area=${address}&carnum=${el}`}>{el}</Link></h3>  
                     ))
                    }
                    <div  className="d-flex bd-highlight"> <h3 class="p-2 flex-fill bd-highlight" style={{textAlign:"center",borderTop:"2px solid black",borderBottom:"2px solid black",marginBottom:0.75,padding:20,fontSize:14,color:"lightgreen"}}>{yes}</h3><h3 class="p-2 flex-fill bd-highlight" style={{textAlign:"center",borderTop:"2px solid black",borderBottom:"2px solid black",marginBottom:0.75,padding:20,fontSize:14,color:"red"}}>{no}</h3></div>
                    {console.log("hhhhhh="+yes+" "+no)}
                    </td>
               )) 
            }     
        </tbody>
            </Table>
        </>
    )
}

export default  ExliveItem;
