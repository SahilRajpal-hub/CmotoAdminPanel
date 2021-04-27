import React ,{useEffect,useState}from "react";
import firebase from '../../firebase/firebase.utils.js'
import InnerTable from "./innerTable/innerTable.jsx";



const EmpWorkHistory = ({uid})=>{
    const [Dat, setDate] = useState([]);
    const [Prove, setProve] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      firebase
      .database()
      .ref(`Employee/${uid}/Work History`)
      .on(
        'value',
        (snapshot) => {
            const a = []
            const s = []
        snapshot.forEach((element) => {
            a.push(element.key)
            s.push(element.val())
            console.log(element.val())
      })
      setDate(a)
      setProve(s)
      setLoading(false)
        },
        (err) => {
          console.log(err)
        }
      ) },[])

      return(
            <div>
            {loading ? null:
            <div class="card">
            <div class="card-body">
            <h3>Work History</h3>
                <table className="table table-sm table-bordered table-responsive-xl" style={{border:"solid black 2px"}} >
                    <thead className="bg-dark">
                        <tr>
                            <th style={{fontSize:15,color:'white',textAlign:"center"}} scope="col">Date</th>
                            <th style={{fontSize:15,color:'white',textAlign:"center"}} scope="col">Image Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {Dat.map((element,i)=>(
                            <tr style={{fontSize:15,color:'black',textAlign:"center",border:"solid black 2px"}}>
                            <td>{element}</td>
                              <InnerTable Prove={Prove[i]}/>
                            </tr>
                            ))} 
                    </tbody>
                </table>
                </div>
                </div>
            }
            </div>
        )
}

export default EmpWorkHistory;