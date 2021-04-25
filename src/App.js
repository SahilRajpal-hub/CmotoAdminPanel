import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Fragment } from 'react'
import InfoScreen from './Screens/InfoScreen.js'
import Exlive from './Screens/ExliveScreen.js'
import Inlive from './Screens/InliveScreen.js'
import SetDuties from './Screens/SetDuties.js'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/login' component={Login} />
        <Route exact path='/carinfo' component={InfoScreen} />
        <Route exact path='/exlive' component={Exlive} />
        <Route exact path='/inlive' component={Inlive} />
        <Route exact path='/setDuties' component={SetDuties} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
