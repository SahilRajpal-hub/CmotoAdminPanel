import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav
      className='sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white'
      id='sidenav-main'
    >
      <div className='scrollbar-inner'>
        {/* <!-- Brand --> */}
        <div className='sidenav-header  align-items-center'>
          <Link className='navbar-brand' to='/'>
            <img
              src='assets/img/brand/blue.png'
              className='navbar-brand-img'
              alt='...'
            />
          </Link>
        </div>
        <div className='navbar-inner'>
          {/* <!-- Collapse --> */}
          <div className='collapse navbar-collapse' id='sidenav-collapse-main'>
            {/* <!-- Nav items --> */}
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/'>
                  <i className='ni ni-tv-2 text-primary'></i>
                  <span className='nav-link-text'>Dashboard</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-planet text-orange'></i>
                  <span className='nav-link-text'>Icons</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-pin-3 text-primary'></i>
                  <span className='nav-link-text'>Google</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-single-02 text-yellow'></i>
                  <span className='nav-link-text'>Profile</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-bullet-list-67 text-default'></i>
                  <span className='nav-link-text'>Tables</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-key-25 text-info'></i>
                  <span className='nav-link-text'>Login</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-circle-08 text-pink'></i>
                  <span className='nav-link-text'>Register</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <i className='ni ni-send text-dark'></i>
                  <span className='nav-link-text'>Upgrade</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
