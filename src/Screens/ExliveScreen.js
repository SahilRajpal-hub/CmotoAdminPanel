import React from 'react'
import Exteriorlive from '../Components/Exteriorlive.js'
import Navbar from '../Components/Navbar.js'
import Sidebar from '../Components/Sidebar'

const Exlive=()=>(
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <Exteriorlive/>
    </div>
    </div>
    )

export default Exlive