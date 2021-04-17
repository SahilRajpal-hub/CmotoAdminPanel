import React from 'react'
import Navbar from '../Components/Navbar'
import Info from '../Components/Info/info.jsx'

const InfoScreen=({match})=>{
     return (
        <div className='main-content' id='panel'>
          <Navbar />
          <div className='container-fluid' style={ { paddingTop: 25 } } >
          <Info para={match.params}/>
          </div> 
        </div>
      )
};

export default InfoScreen;