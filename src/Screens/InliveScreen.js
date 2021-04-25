import React from 'react'
import Interiorlive from '../Components/Interiorlive.js'
import Navbar from '../Components/Navbar.js'
import Sidebar from '../Components/Sidebar'

const Inlive=()=>(
  <div>
  <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <Interiorlive/>
    </div>
    </div>
    )

export default Inlive