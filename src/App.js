import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Cars from './Components/Cars'
import { BrowserRouter, Route } from 'react-router-dom'
import { Fragment } from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path='/' component={Sidebar} />
        {/* <Route path='/' component={Navbar} /> */}
        <Route exact path='/' component={HomeScreen} />
        <Route path='/login' component={Login} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
