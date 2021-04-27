import React from 'react'
import AreaSocieties from '../Components/AreaSocieties.js'
import Navbar from '../Components/Navbar.js'
import EmpPreview from '../Components/section/emp-preview/emp-preview.jsx'
import Section from '../Components/section/section.jsx'
import Sidebar from '../Components/Sidebar'


const EmpScreen=()=>(
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <AreaSocieties address={"Employees"} component={Section} component2={EmpPreview}/>
    </div>
    </div>
    )

export default EmpScreen