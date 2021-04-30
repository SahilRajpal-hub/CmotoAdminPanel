import React ,{useEffect,useState}from "react";
import firebase from '../../firebase/firebase.utils.js'
import './empinfo.css'
import Loader from '../Loader'
import { Link} from 'react-router-dom'


const EmpInfo =({uid,address})=>{
    
  address = address.slice(0, address.length - 1);
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(true)

    const infofetch= function(){
         firebase
          .database()
          .ref(`${address}/${uid}`)
          .on(
            'value',
            (snapshot) => {
             setEmployee(snapshot.val())
             setLoading(false)
            },
            (err) => {
              console.log(err)
            }
          )
      }
    

    useEffect(() =>{
      infofetch() },[])

    return(
      <div>
      {loading ? <Loader/> :
        <div className="card">
          <div className="card-header heading" style={{color:'black'}}>
          
          <div class="d-flex justify-content-between">
            <h1>{employee.Name}</h1>
            
            <div>
            <Link  to={`empProfile?uid=${uid}`} style={{fontSize:14,marginBottom:0,textDecorationLine:"underline"}}>Edit</Link>
            </div>
            </div>
          </div>
          <div className="InfoContainer">
            <div className="card-body content">
              <blockquote className="blockquote mb-0">
           
              <h3>Employee Number :  <span className="details"> {employee.ContactNumber}</span></h3>
              <h3>Status :  <span className="details"> {employee.status}</span></h3>
              <h3>Address :  <span className="details">{employee.Address} </span></h3>

              </blockquote>
            </div>
           
          
          </div>
        </div>

      }
      </div>
   )
   
    
}

export default EmpInfo

