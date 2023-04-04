import React, {useEffect, useState} from 'react'
import './navbar.css'

import {Logo} from '../assets'
import {NavItem} from '../components'

const Navbar = (props) => {
  return (
    <nav id='home' className='navbar'>
      <a href='/' className='navbar-logo'>
        <img src={Logo} alt='logo' />
      </a>
      <ul className='navbar-nav'>
        <NavItem text='Home' itemName='home' bold />
        <NavItem text='Projects' itemName='projects' opacity='75%' />
        <NavItem text='Contact' itemName='contact' opacity='75%' />
      </ul>
    </nav>
  )
}

export default Navbar
