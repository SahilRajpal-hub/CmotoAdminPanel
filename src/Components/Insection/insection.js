import firebase from '../../firebase/firebase.utils.js'
import React,{ useEffect, useState } from 'react'

const Insection=({workersInfo})=>{
    const weekday={textAlign:"center",border:"1px solid #e9ecef",marginBottom:0.75,padding:7,fontSize:14,color:"black"}
    const carstyle={textAlign:"center",border:"1px solid #e9ecef",marginBottom:0.75,padding:7,fontSize:14,color:"black"}
    const col=function(el){
        let co="red"
        firebase.database().ref(`Car Status/${el}/Interior Cleaning status`).on('value',(snapshot) => {
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

    return (
        <div class="card">
        <div class="card-body">
        <table><tbody>{workersInfo.map((workerInfo,i) =>(
        <td>
        <h1 style={{textAlign:"center",border:"1px solid #e9ecef",marginBottom:0.75,padding:14,fontSize:20,color:"white",backgroundColor:"black"}}>{workerInfo.Name}</h1>
        <h2 style={weekday}>Monday</h2>
        <div>{workerInfo.mondayCars.split(',').map((el,i)=>{
          return <h5 style={{...carstyle,backgroundColor:col(el)}}>{el}</h5>
        })}</div>
        <h2 style={weekday}>Tuesday</h2>
        <div>{workerInfo.tuesdayCars.split(',').map((el,i)=>{
          return <h5 style={{...carstyle,backgroundColor:col(el)}}>{el}</h5>
        })}</div>
        <h2 style={weekday}>Wednesday</h2>
        <div>{workerInfo.wednesdayCars.split(',').map((el,i)=>{
          return <h5 style={{...carstyle,backgroundColor:col(el)}}>{el}</h5>
        })}</div>
        <h2 style={weekday}>Thursday</h2>
        <div>{workerInfo.thursdayCars.split(',').map((el,i)=>{
          return <h5 style={{...carstyle,backgroundColor:col(el)}}>{el}</h5>
        })}</div>
        <h2 style={weekday}>Friday</h2>
        <div>{workerInfo.fridayCars.split(',').map((el,i)=>{
          return <h5 style={{...carstyle,backgroundColor:col(el)}}>{el}</h5>
        })}</div>
        </td>   
    ))}
    </tbody>
    </table>
    </div>
    </div>
    )
}
export default Insection;