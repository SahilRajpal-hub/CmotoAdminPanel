import React ,{useEffect,useState}from "react";
import firebase from '../../firebase/firebase.utils.js'
import './editCarInfo.css'
import Loader from '../Loader'
import {Link} from 'react-router-dom'


const EditCarInfo =({area,carnum})=>{
    const [vehicle, setVehicle] = useState({});
    const [loading, setLoading] = useState(true)
    const [vehiclenum, setVehiclenum] = useState("");
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [color, setColor] = useState("");
    const [model, setModel] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");
    
    const set={setType,setAddress,setColor,setMobileNo,setName,setModel,setVehiclenum}
   
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        let userRef = firebase.database().ref(`cars/${area}/${carnum}`);
        userRef.update({ 
          address: address,
          category: type,
          color: color,
          mobileNo: mobileNo,
          model: model,
          name: name,
          number: vehiclenum

        });
       
        alert('successfully updated')
      } catch (error) {
        console.log(error)
      }
    }

    const handleChange = (event) => {
      const { value, name } = event.target
      console.log(name+"=="+value);
      set[`${name}`](value);
    }

    const infofetch= function(){
         firebase
          .database()
          .ref(`cars/${area}/${carnum}`)
          .on(
            'value',
            (snapshot) => {
             setVehicle(snapshot.val())
             setVehiclenum(snapshot.val().number)
             setName(snapshot.val().name)
             setMobileNo(snapshot.val().mobileNo)
             setAddress(snapshot.val().address)
             setColor(snapshot.val().color)
             setType(snapshot.val().category)
             setModel(snapshot.val().model)
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
          <div className="d-flex justify-content-between">
          <h1>Edit Profile</h1>
          <button type="submit" form="my-form" class="btn btn-primary">Save</button>
          </div>
         </div>

          <div className="InfoContainer">
            <div className="card-body content">
              <blockquote className="blockquote mb-0">
              <form id='my-form'  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onSubmit={handleSubmit}>

              <div className="input-group mb-1">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100  input-group-text  border border-dark" >Vehicle Number</span>
                  </div>
                  <input type="text" onChange={handleChange} name="setVehiclenum" className="form-control  border border-dark" value={vehiclenum} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
             </div>

              <div className="input-group mb-1 ">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100  input-group-text border border-dark" >Owner Name</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control  border border-dark" name="setName" value={name} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <div className="input-group mb-1 ">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100  input-group-text  border border-dark" >Owner Phone</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control  border border-dark" name="setMobileNo" value={mobileNo} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <div className="input-group mb-1 ">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100  input-group-text  border border-dark" >Modal</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control  border border-dark" name="setModel" value={model} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <div className="input-group mb-1 ">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100  input-group-text  border border-dark" >Type</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control  border border-dark" name="setType" value={type} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <div className="input-group  mb-1 ">
                  <div className="input-group-prepend " style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100 input-group-text  border border-dark" >Color</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control  border border-dark" name="setColor" value={color} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <div className="input-group mb-1 ">
                  <div className="input-group-prepend" style={{width:"18%"}}>
                    <span className="text-white bg-dark w-100 input-group-text border border-dark " >Address</span>
                  </div>
                  <input type="text" onChange={handleChange} className="form-control border border-dark" name="setAddress" value={address} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>  
               </form>

              <h3>Location :  <a  className="details" href="https://www.google.com/maps/place/28.6831899,77.13279" style={{color:'blue'}}>Go to google maps </a></h3>

              </blockquote>
            </div>
           

          </div>
        </div>

      }
      </div>
   )
   
    
}

export default EditCarInfo

