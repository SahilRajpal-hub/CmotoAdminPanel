import React ,{useEffect,useState}from "react";
import { useHistory } from "react-router-dom";
import firebase from '../../firebase/firebase.utils.js'
import {Prompt} from 'react-router-dom'

const CarForm=()=>{
     
    const [societies, setSocieties] = useState([])
    const [areas, setAreas] = useState([])
    const [formData, updateFormData] = React.useState({});
    const[done,setDone]=useState(false);
    let history = useHistory();

    useEffect(() => {
        firebase.database().ref("address").on('value',(snapshot) => {
              const a = []
              snapshot.forEach((element) => {           
                  a.push(element.key)    
              })
              setAreas(a)
        },
        (err) =>{
              console.log(err)
        })

        window.addEventListener('beforeunload', alertUser)
        return () => {
          window.removeEventListener('beforeunload', alertUser)
        }
    },[])
    
    const alertUser = e => {
      e.preventDefault()
      e.returnValue = ''
    }

    const society=(event)=>{
        if(event.target.value==="Choose..."){
              return;
        }
        firebase.database().ref(`address/${event.target.value}`).on('value',(snapshot) => {
            const s = []
            snapshot.forEach((element) => {
              s.push(element.key)
            }) 
            setSocieties(s)   
        }
        ,
        (err) => {
            console.log(err)
        })
    }


    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    };

    function now() {
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
      return date
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          await setDone(true);
          let {Area,Society,...carData}=formData;
          let CarStatus={category:formData.category,Payment:formData.Payment,lastCleanedInterior:`${now()}`,lastPaidOn:`${now()}`,"Interior Cleaning status":"In waiting",status: "In waiting",InteriorDays_Left:4,doneBy:"",timeStamp: "0"}
          let cars= {...carData,address:`${formData.houseNumber} ${formData.Area}/${formData.Society}`,photo:""}
          let userRef=firebase.database().ref(`cars/${Area}/${Society}/${formData.number}`);
          userRef.update(cars)
          let userRef2=firebase.database().ref(`Car Status/${formData.number}`);
          userRef2.update(CarStatus)
          alert("successfully added")
          history.push("/") 
        } catch (error) {
          console.log(error)
        }
    }

    return(
      <div>
        <Prompt
        when={!done}
        message={ `Changes you made may not be saved.`}
        />
        <div className="card">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                
                <form onSubmit={handleSubmit} > 
                
                <div className="form-group-sm mb-3">
                <label>Area</label>
                <select className="custom-select"  required name="Area" onInput={society} onChange={handleChange}>
                  <option disabled selected value="">Choose...</option>
                  {
                      areas.map((area,i)=>{
                        return (
                        <option>{area}</option>
                      )})
                  }
                  
                </select>
              </div>

              <div className="form-group-sm mb-3">
              <label>Society</label>
              <select className="custom-select"  required name="Society" onChange={handleChange}>
                <option disabled selected value="">Choose...</option>
                {
                    societies.map((society,i)=>{
                      return (
                      <option>{society}</option>
                    )})
                }
              </select>
            </div>

                <div className="form-group-sm mb-3">
                 <label>Vehicle No.</label>
                 <input  class="form-control" name="number" required onChange={handleChange} placeholder="Enter vehicle number"/>
                </div>
                
                <div className="form-group-sm mb-3">
                 <label >Owner Name</label>
                 <input  class="form-control" name="name" required onChange={handleChange} placeholder="Enter owner name "/>
                </div>

                <div className="form-group-sm mb-3">
                <label >Mobile No.</label>
                <input  class="form-control" name="mobileNo" required onChange={handleChange} placeholder="Enter mobile number"/>
               </div>

                <div className="form-group-sm mb-3">
                <label >House Number</label>
                <input  class="form-control" name="houseNumber" required onChange={handleChange} placeholder="Enter house number"/>
               </div>

                <div className="form-group-sm mb-3">
                 <label >Location</label>
                 <input  class="form-control" name="Location" required onChange={handleChange} placeholder="Enter location"/>
                </div>
 
                <div className="form-group-sm mb-3">
                 <label >Category</label>
                 <input  class="form-control" name="category" required onChange={handleChange} placeholder="Enter category"/>
                </div>

                <div className="form-group-sm mb-3">
                 <label >Color</label>
                 <input  class="form-control" name="color" required onChange={handleChange} placeholder="Enter color"/>
                </div>

                <div className="form-group-sm mb-3">
                 <label >Model</label>
                 <input  className="form-control" name="model" required onChange={handleChange} placeholder="Enter model"/>
                </div>
               
                <div className="form-group-sm mb-3">
                <label>Payment</label>
                <select className="custom-select" required onChange={handleChange} name="Payment">
                <option disabled selected value="">Choose...</option>
                  <option  >Active</option>
                  <option >Inactive</option>
                </select>
                 </div> 

                <div className="form-group-sm mb-3">
              <label>Free Trail</label>
              <select className="custom-select" required onChange={handleChange} name="freeTrial" >
              <option disabled selected value="">Choose...</option>
                <option >Expired</option>
                <option >Active</option>
               
              </select>
            </div>

                <div className="form-group-sm mb-3">
                 <label>Holiday</label>
                 <input  class="form-control" name="holiday" required onChange={handleChange} placeholder="Enter Number of holiday"/>
              </div>

                <div className="form-group-sm mb-3 mb-3">
                 <label>Leave Time</label>
                 <input  class="form-control" name="leaveTime" required onChange={handleChange} placeholder="Enter Leave Time"/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
                </blockquote>
            </div>
        </div>

        </div>
         
    )
}

export default CarForm;