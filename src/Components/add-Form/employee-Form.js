import React ,{useEffect,useState}from "react";
import { auth } from "../../firebase/firebase.utils.js"
import { useHistory } from "react-router-dom";
import firebase from '../../firebase/firebase.utils.js'
import {Prompt} from 'react-router-dom'


const EmployeeForm=()=>{
    const [formData_1, updateFormData_1] = useState({});
    const [formData_2, updateFormData_2] = useState({});
    const [uidGenerated,setUidGenerated]=useState(false);
    const [employeeUid,setEmployeeUid]=useState("")
    const [societies, setSocieties] = useState([])
    const [areas, setAreas] = useState([])
    const[done,setDone]=useState(false);

    let history = useHistory();

    useEffect(() => {
      firebase.database().ref("address").on(
          'value',
          (snapshot) => {
            const a = []
            snapshot.forEach((element) => {
              if (element.key !== 'clusters') {
                a.push(element.key)
              }
            })
            setAreas(a)
          },
          (err) => {
            console.log(err)
          }
        )

        window.addEventListener('beforeunload', alertUser)
        return () => {
          window.removeEventListener('beforeunload', alertUser)
        }
    }, [])
  
    const alertUser = e => {
      e.preventDefault()
      e.returnValue = ''
    }

    const handleChange_1 = (e) => {
        updateFormData_1({
          ...formData_1,
          [e.target.name]: e.target.value.trim()
        });
    };

    const handleChange_2 = (e) => {
        updateFormData_2({
          ...formData_2,
          [e.target.name]: e.target.value.trim()
        });
    };
      
    const handleSubmit_1 = async (event) => {
        event.preventDefault()
        try {
          if(formData_1.password!==formData_1.Conpassword){
            alert("password and confirm password do not match")
            return;
          }
          const { user } = await auth.createUserWithEmailAndPassword(formData_1.email,formData_1.password);
         setEmployeeUid(user.uid);
         setUidGenerated(true);
        } catch (error) {
          console.log(error)
        }
    }

    const handleSubmit_2 = async (event) => {
        event.preventDefault()
        try {
         await setDone(true);
          let {Area,Society,...Employee}=formData_2;
          let EmployeeData_1={...Employee,name:Employee.Name,mobileNo:Employee.ContactNumber,Cluster:"",ClusterNumber:"",status:"free",todaysCars:"",Working_Address:`${Area}/${Society}`,"working on": ""}
          let userRef=firebase.database().ref(`Employee/${employeeUid}`);
          userRef.update(EmployeeData_1);
          let EmployeeData_2={Cluster:"",Name:Employee.Name,email:`${formData_1.email}`,ClusterNumber:"",status:"free",todaysCars:"",Working_Address:`${Area}/${Society}`,"working on":""}
          let userRef2=firebase.database().ref(`Employees/${Area}/${Society}/${employeeUid}`);
          userRef2.update(EmployeeData_2);
          alert("successFully Added")
          history.push("/employee")
        } catch (error) {
          console.log(error)
        }
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
        },
        (err) => {
          console.log(err)
        }
        )
    }

    return(
      <div>

      {uidGenerated ?  
      <div>
          <Prompt
          when={!done}
          message={ `Changes you made may not be saved.`}
          />
          <div className="card">
          <div className="card-header">
            <h2>Employee Uid: {employeeUid}</h2>
          </div>
            <div className="card-body">
            <blockquote className="blockquote mb-0">
    
            <form onSubmit={handleSubmit_2} > 

              <div className="form-group-sm mb-3 mb-3">
              <label>Name</label>
              <input  class="form-control"   name="Name" required onChange={handleChange_2} placeholder="Enter name"/>
              </div>


              <div className="form-group-sm mb-3 mb-3">
                <label>Employee Address</label>
                <input  class="form-control"   name="Address" required onChange={handleChange_2} placeholder="Enter Address"/>
              </div>

              <div className="form-group-sm mb-3 mb-3">
                <label>Mobile Number</label>
                <input  class="form-control"  name="ContactNumber" required onChange={handleChange_2} placeholder="Enter Mobile Number"/>
              </div>
              
              <div className="form-group-sm mb-3">
              <label>Area</label>
              <select className="custom-select" required name="Area" onInput={society} onChange={handleChange_2}>
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
              <select className="custom-select" required name="Society" onChange={handleChange_2}>
                  <option disabled selected value="">Choose...</option>
                  {
                      societies.map((society,i)=>{
                        return (
                        <option>{society}</option>
                      )})
                  }
              </select>
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </blockquote>
            </div>
          </div>
          </div>

          :

          <div>
            <Prompt
            when={!done}
            message={ `Changes you made may not be saved.`}
            />
            <div className="card">
          
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                  
                    <form onSubmit={handleSubmit_1} > 
        
                  <div className="form-group-sm mb-3">
                    <label>Email</label>
                    <input  class="form-control" name="email" required onChange={handleChange_1} placeholder="Enter email"/>
                  </div>

                    <div className="form-group-sm mb-3 mb-3">
                    <label>Password</label>
                    <input  class="form-control"  type="password" name="password" required onChange={handleChange_1} placeholder="Enter password"/>
                    </div>

                    <div className="form-group-sm mb-3 mb-3">
                    <label>Confirm Password</label>
                    <input  class="form-control"  name="Conpassword" required onChange={handleChange_1} placeholder="Enter password to confirm"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    
                    </blockquote>
                </div>
            </div>
            </div>
      }

      </div>     
    )
}

export default EmployeeForm;