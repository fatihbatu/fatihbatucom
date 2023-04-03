import React from 'react'
import './navitem.css'

const NavItem = (props) => {
  return (
    <li className='nav-item'>
      <a href={props.href} className='nav-text' style={{opacity: `${props.opacity}`}}>
        {props.text}
      </a>
    </li>
  )
}

export default NavItem
