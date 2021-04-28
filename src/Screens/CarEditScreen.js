import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import queryString from 'query-string'
import EditCarInfo from '../Components/editCarInfo/editCarInfo'

const CarEditScreen = ({ location }) => {
  const values = queryString.parse(location.search)

  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />

      <div className='container-fluid' style={{ paddingTop: 25 }}>
        <EditCarInfo area={values.area} carnum={values.carnum} />
      </div>
      
    </div>
    </div>
  )
}

export default CarEditScreen
