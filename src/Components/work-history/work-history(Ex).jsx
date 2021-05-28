import React ,{useEffect,useState}from "react";
import firebase from '../../firebase/firebase.utils.js'



const WorkHistory = ({carnum})=>{
    const [Dat, setDate] = useState([]);
    const [Prove, setProve] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      firebase
      .database()
      .ref(`Car Status/${carnum}/Work History`)
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

      const done=(el)=>{
          console.log(el)
          let nam=""
          firebase.database().ref(`Employee/${el}`).on('value',(snapshot) => {
              nam=snapshot.val().Name
          })
          return nam;
      }

      return(
            <div>
            {loading ? null:
            <div class="card">
            <div class="card-body">
            <h3>Work History-Exterior</h3>
                <table className="table table-sm table-bordered table-responsive-xl">
                    <thead className="bg-dark">
                        <tr>
                            <th style={{fontSize:15,color:'white',textAlign:"center"}} scope="col">Date</th>
                            <th style={{fontSize:15,color:'white',textAlign:"center"}} scope="col">Image Url</th>
                            <th style={{fontSize:15,color:'white',textAlign:"center"}} scope="col" >Done by</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {Dat.map((element,i)=>(
                            <tr style={{fontSize:15,color:'black',textAlign:"center"}}>
                            <td>{element}</td>
                            <td><a target="__blank__" href={Prove[i]['Photo Url']}>Go to image</a></td>
                            <td>{done(Prove[i].doneBy)===""?Prove[i].doneBy:done(Prove[i].doneBy)}</td>
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

export default WorkHistory;