import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import queryString from 'query-string'
import EmpInfo from '../Components/empInfo/empinfo.jsx'
import WorkHistory from '../Components/work-history/work-history(Ex).jsx'
import InteriorWork from '../Components/work-history/work-history(In).jsx'
import EmpWorkHistory from '../Components/empwork-history/empwork-history'

const EmpInfoScreen = ({ match, location }) => {
  const values = queryString.parse(location.search)
  let [a, setA] = useState(true)
  let [b, setB] = useState(true)

  const toggleA = function () {
    setA(!a)
    setB(true)
  }

  const toggle = function () {
    setB(!b)
    setA(true)
  }

  const color = function (ele) {
    return ele ? 'white' : 'black'
  }

  const textcolor = function (ele) {
    return ele ? 'black' : 'white'
  }

  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />

      <div className='container-fluid' style={{ paddingTop: 25 }}>
        <EmpInfo uid={values.uid} />
        <div className='d-flex justify-content-between'>
          <button
            style={{
              paddingTop: '20',
              width: '33%',
              background: color(a),
              color: textcolor(a),
            }}
            onClick={toggleA}
            className='container-fluid'
          >
            Work History
          </button>
          <button
            style={{
              paddingTop: '20',
              width: '33%',
              background: color(b),
              color: textcolor(b),
            }}
            onClick={toggle}
            className='container-fluid'
          >
            Work History(Interior)
          </button>
        </div>
      </div>
      <div className='container-fluid' style={{ paddingTop: 25 }}>
        {a ? null : <EmpWorkHistory uid={values.uid} />}
        {b ? null : <InteriorWork uid={values.uid} />}
      </div>
    </div>
    </div>
  )
}

export default EmpInfoScreen
