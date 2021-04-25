import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar.js'
import AllSocieties from '../Components/AllSocieties.js'
import DragAndDrop from '../Components/dragAndDrop'
import queryString from 'query-string'

const SetDuties = ({ location }) => {
  var values = queryString.parse(location.search)
  console.log(values)

  useEffect(() => {
    values = queryString.parse(location.search)
  }, [values])

  return (
    <div className='main-content' id='panel'>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: 15 }}>
        {values.society ? (
          <DragAndDrop society={values.society} />
        ) : (
          <AllSocieties />
        )}
      </div>
    </div>
  )
}

export default SetDuties
