import React from 'react'
import './navbar.css'

import {ReactComponent as Logo} from '../assets/logo.svg'
import NavItem from '../components/NavItem'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <a href='/'>
        <Logo className='logo' />
      </a>
      <ul className='navbar-nav'>
        <NavItem text='Home' />
        <NavItem text='Projects' />
        <NavItem text='Contact' />
      </ul>
    </nav>
  )
}

export default Navbar
