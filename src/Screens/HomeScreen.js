import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Section from '../Components/section/section'
import AreaSocieties from '../Components/AreaSocieties.js'
import CarPreview from '../Components/section/car-preview/car-preview'


const HomeScreen = () => {
  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <AreaSocieties address={"cars"} component={Section} component2={CarPreview}/>
    </div>
    </div>
  )
}

export default HomeScreen
