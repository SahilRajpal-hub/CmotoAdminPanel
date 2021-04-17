import React from 'react'
import Navbar from '../Components/Navbar'
import Info from '../Components/Info/info.jsx'
import queryString from 'query-string'

const InfoScreen = ({ match, location }) => {
  const values = queryString.parse(location.search)
  // console.log(values.area)
  // console.log(values.carnum)
  return (
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 25 }}>
        <Info area={values.area} carnum={values.carnum} />
      </div>
    </div>
  )
}

export default InfoScreen
