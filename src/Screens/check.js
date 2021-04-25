import React from 'react'
import { auth } from "../firebase/firebase.utils.js"
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';




const Check=({currentUser})=>{
  const history=useHistory();
  
    console.log("currentUser")
    console.log(currentUser)
    if(currentUser===null)return(<div>You have been logged out</div>);
    const logout=()=>{
      auth.signOut()
      history.push("/login")
    }
    return (
        <div>
        <h1>{currentUser.email+" /"+currentUser.id}</h1>
      <button  onClick={logout} >logout </button>
        </div>
    )
}
   
    
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Check);