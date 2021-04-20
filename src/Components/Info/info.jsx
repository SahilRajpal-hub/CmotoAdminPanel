import React ,{useEffect,useState}from "react";
import firebase from '../../firebase/firebase.utils.js'
import './info.css'
import Loader from '../Loader'


const Info =({area,carnum})=>{

    const [vehicle, setVehicle] = useState({});
    const [loading, setLoading] = useState(true)

    const infofetch= function(){
         firebase
          .database()
          .ref(`cars/${area}/${carnum}`)
          .on(
            'value',
            (snapshot) => {
             setVehicle(snapshot.val())
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
          {vehicle.number}
          </div>
          <div className="InfoContainer">
            <div className="card-body content">
              <blockquote className="blockquote mb-0">
              <h3>Owner Name :  <span className="details"> {vehicle.name}</span></h3>
              <h3>Owner Phone :  <span className="details"> {vehicle.mobileNo}</span></h3>
              <h3>Modal :  <span className="details"> {vehicle.model}</span></h3>
              <h3>Type :  <span className="details"> {vehicle.category}</span></h3>
              <h3>Color :  <span className="details"> {vehicle.color}</span></h3>
              <h3>Address :  <span className="details">{vehicle.address} </span></h3>
              <h3>Location :  <a  className="details" href="https://www.google.com/maps/place/28.6831899,77.13279" style={{color:'blue'}}>Go to google maps </a></h3>

              </blockquote>
            </div>
           
            <img className="Image ImageBox" style={{border:"double 5px"}} src={vehicle.photo} alt={`${vehicle.name}'s car`}/>
          
          </div>
        </div>

      }
      </div>
   )
   
    
}

export default Info

