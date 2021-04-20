import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Fragment } from 'react'
import InfoScreen from './Screens/InfoScreen.js'
import Exlive from './Screens/ExliveScreen.js'
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path='/' component={Sidebar} />
        {/* <Route path='/' component={Navbar} /> */}
        <Route exact path='/' component={HomeScreen} />
        <Route path='/login' component={Login} />
        <Route exact path='/carinfo' component={InfoScreen} />
        <Route exact path='/exlive' component={Exlive} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
