import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import CarForm from '../Components/add-Form/carForm'


const AddCar = () => {
  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 25 }}>
      <CarForm/>
      </div>
    </div>
    </div>
  )
}

export default AddCar
