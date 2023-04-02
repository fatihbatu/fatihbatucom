import React from 'react'
import './navbar.css'

import Logo from '../assets/logo.svg'
import {NavItem} from '../components'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-logo'>
        <img src={Logo} alt='logo' />
      </a>
      <ul className='navbar-nav'>
        <NavItem text='Home' bold />
        <NavItem text='Projects' opacity='75%' />
        <NavItem text='Contact' opacity='75%' />
      </ul>
    </nav>
  )
}

export default Navbar
