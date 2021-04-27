import React from 'react'
import AreaSocieties from '../Components/AreaSocieties.js'
import Navbar from '../Components/Navbar.js'
import ExlivePreview from '../Components/section/exlive-preview/exlive-preview.jsx'
import Section from '../Components/section/section.jsx'
import Sidebar from '../Components/Sidebar'

const Exlive=()=>(
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <AreaSocieties address={"Employees"} component={Section} component2={ExlivePreview}/>
    </div>
    </div>
)

export default Exlive