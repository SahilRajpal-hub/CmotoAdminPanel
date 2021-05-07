import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import EmployeeForm from '../Components/add-Form/employee-Form'


const AddEmployee = () => {
  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 25 }}>
      <EmployeeForm/>
      </div>
    </div>
    </div>
  )
}

export default AddEmployee