import React,{useState} from 'react'
import Interiorlive from '../Components/Interiorlive.js'
import Navbar from '../Components/Navbar.js'
import Sidebar from '../Components/Sidebar'

const Inlive=()=>{
  const [sidebar,setSidebar] = useState(true)

  const sidebarListener = () => {
    console.log('sidebar')
    setSidebar(!sidebar)
  }

  return (
  
  <div>
  <Sidebar />
    <div className='main-content' id='panel'>
      <Navbar />
      <Interiorlive/>
    </div>
    </div>
  )
}

export default Inlive