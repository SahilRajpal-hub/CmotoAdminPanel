import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar.js'
import DragAndDrop from '../Components/dragAndDrop'
import queryString from 'query-string'
import Sidebar from '../Components/Sidebar'
import AreaSocieties from '../Components/AreaSocieties.js'
import AreaTable from '../Components/AreaTable.js'


const SetDuties = ({ location }) => {
  var values = queryString.parse(location.search)
  console.log(values)

  useEffect(() => {
    values = queryString.parse(location.search)
  }, [values])

  return (
    <div>
  <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 15 }}>
        {values.society ? (
          <DragAndDrop society={values.society} />
        ) : (
          <AreaSocieties address={"Employees"} component={AreaTable}/>
        )}
      </div>
    </div>
    </div>
  )
}

export default SetDuties
