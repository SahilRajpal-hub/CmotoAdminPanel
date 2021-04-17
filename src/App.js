import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Fragment } from 'react'
import Info from './Screens/InfoScreen.js'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path='/' component={Sidebar} /> 
        {/* <Route path='/' component={Navbar} /> */}
        <Route exact path='/' component={HomeScreen} />
        <Route path='/login' component={Login} />
        <Route exact path='/info/:area/:apartment/:number' component={Info} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
