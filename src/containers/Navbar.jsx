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
        <NavItem text='Home' href='#' bold />
        <NavItem text='Projects' href='#projects' opacity='75%' />
        <NavItem text='Contact' href='#contact' opacity='75%' />
      </ul>
    </nav>
  )
}

export default Navbar
