import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Car from '../Components/Cars'

const HomeScreen = () => {
  return (
    <div>
    <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <Car />
     
    </div>
    </div>
  )
}

export default HomeScreen
