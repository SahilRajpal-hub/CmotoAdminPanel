import React, { useEffect } from 'react'
import firebase from '../firebase/firebase.utils'


const Check=()=>{

    useEffect(()=>{
       const a= firebase.database().ref(`Car Status`);
       console.log(a)
       
    })

    return (
        1
    )
}
   
    

export default Check