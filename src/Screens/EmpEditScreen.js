import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import queryString from 'query-string'
import EditEmpInfo from '../Components/editEmpInfo/editEmpInfo'

const EmpEditScreen = ({ location }) => {
  const values = queryString.parse(location.search)

  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />

      <div className='container-fluid' style={{ paddingTop: 25 }}>
        <EditEmpInfo uid={values.uid} />
      </div>
      
    </div>
    </div>
  )
}

export default EmpEditScreen
