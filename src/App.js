import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/LoginScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Fragment } from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/login' component={Login} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
