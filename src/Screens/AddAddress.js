import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import AddressForm from '../Components/add-Form/address-form'

const AddAddress = () => {
  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 25 }}>
      <AddressForm/>
      </div>
    </div>
    </div>
  )
}

export default AddAddress
