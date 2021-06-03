import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Info from '../Components/Info/info.jsx'
import queryString from 'query-string'
import firebase from '../firebase/firebase.utils.js'

import WorkHistory from '../Components/work-history/work-history(Ex).jsx'
import InteriorWork from '../Components/work-history/work-history(In).jsx'

const InfoScreen = ({ match, location }) => {
  
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
        <Info area={values.area} carnum={values.carnum} />
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
            Work History(Exterior)
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
        {a ? null : <WorkHistory carnum={values.carnum} />}
        {b ? null : <InteriorWork carnum={values.carnum} />}
      </div>
    </div>
    </div>
  )
}

export default InfoScreen
