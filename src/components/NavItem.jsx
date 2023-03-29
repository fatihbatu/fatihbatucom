import React from 'react'
import './navitem.css'

const NavItem = (props) => {
  return (
    <li className='nav-item'>
      <a href='#' className='nav-text' onClick={() => setOpen(!open)}>
        {props.text}
      </a>
    </li>
  )
}

export default NavItem
