import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import { BrowserRouter, Route } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import InfoScreen from './Screens/InfoScreen.js'
import Exlive from './Screens/ExliveScreen.js'
import Inlive from "./Screens/InliveScreen.js"
import SignUp from './Screens/SignUp.js'
import { auth } from "./firebase/firebase.utils.js"
import Check from './Screens/check.js'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';
import PrivateRoutes from "./Components/PrivateRoutes.js"
import PrivateRoutes2 from "./Components/PrivateRoutes2.js"
import Loader from './Components/Loader'
import SetDuties from './Screens/SetDuties.js'
import EmployeeScreen from './Screens/EmployeeScreen.js'
import EmpInfoScreen from './Screens/EmpInfoScreen.js'
import CarEditScreen from './Screens/CarEditScreen'
import EmpEditScreen from './Screens/EmpEditScreen'
import AddCar from './Screens/AddCar'
import AddEmployee from './Screens/AddEmployee'

const App = (props) => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const { setCurrentUser } = props;
    auth.onAuthStateChanged(async userAuth => {
      // console.log(userAuth);
      if(userAuth){
        console.error("Successfully Logged In");
        const current={
          id:userAuth.uid,
          name:userAuth.displayName,
          email:userAuth.email
        }
        setCurrentUser(current)
        setLoading(false)
      }else{
        console.error("Succesfully Logged out");
        setCurrentUser(userAuth);
        setLoading(false)
      }
    })
  },[]);

  
  return (
    <BrowserRouter>
      <Fragment>
      {loading ? <Loader/>:<div>
        <PrivateRoutes exact path='/' component={HomeScreen} />
        <PrivateRoutes2 path='/login' component={Login} />
        <PrivateRoutes exact path='/carinfo' component={InfoScreen} />
        <PrivateRoutes exact path='/exlive' component={Exlive} />
        <PrivateRoutes exact path='/inlive' component={Inlive} />
        <PrivateRoutes exact path='/setDuties' component={SetDuties} />
        <PrivateRoutes exact path='/employee' component={EmployeeScreen} />
        <PrivateRoutes exact path='/empinfo' component={EmpInfoScreen} />
        <PrivateRoutes exact path='/empProfile' component={EmpEditScreen} />
        <PrivateRoutes exact path='/carprofile' component={CarEditScreen} />
        <PrivateRoutes exact path='/addemployee' component={AddEmployee} />
        <PrivateRoutes exact path='/addcar' component={AddCar} />
        <PrivateRoutes2 exact path='/signup' component={SignUp} />
        <Route exact path='/check' render={() => (
          <Check  />
        )} />
        </div>
      }
      </Fragment>
     
    </BrowserRouter>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);

