import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table'
import './emp-items.styles.css'
import firebase from '../../../firebase/firebase.utils.js'
import { Link } from 'react-router-dom'


const EmpItem=({Employees})=>{
   const EmployeesName=Object.keys(Employees)
   const Employeedetails=Object.values(Employees)
   const [map, setMap] = useState({})

   useEffect(()=>{
       reload()
   },[])

   const reload = () => {
    firebase
      .database()
      .ref('Car Status')
      .on('value', (snapshot) => {
        setMap(snapshot.val())
      })
  }

   const col=function(el){
    let co="Loading"
    firebase.database().ref(`Employee/${el}/ContactNumber`).on('value',(snapshot) => {
        console.log("No-"+snapshot.val()+"-"+el)
        co=snapshot.val()})
    return co;
   }

    return(
        <>
            <Table bordered responsive >
            <tbody>
            <tr style={{border:"solid black 2px"}} >
            <td style={{textAlign:"center",fontSize:14,fontWeight:600,color:"black"}} >Name</td>
            <td style={{textAlign:"center",fontSize:14,fontWeight:600,color:"black"}} >Email</td>
            <td style={{textAlign:"center",fontSize:14,fontWeight:600,color:"black"}} >Contact Number</td>
            </tr>
            {EmployeesName.map((uid,i)=>(
                <tr style={{border:"solid black 2px"}} >
                    <td style={{textAlign:"center",fontSize:12,fontWeight:600,color:"black"}} ><Link to={`/empinfo?uid=${uid}`}>{Employeedetails[i].Name}</Link></td>
                    <td style={{textAlign:"center",fontSize:12,fontWeight:600,color:"black"}} >{Employeedetails[i].email}</td>
                    <td style={{textAlign:"center",fontSize:12,fontWeight:600,color:"black"}} >{col(EmployeesName[i])}</td> 
                </tr>
            ))} 
            
        </tbody>
            </Table>
        </>
    )
}

export default EmpItem;
