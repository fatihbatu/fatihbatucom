import React, {useEffect, useState} from 'react'
import './navitem.css'

const NavItem = (props) => {
  const [anchorTarget, setAnchorTarget] = useState(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(props.itemName))
  }, [props.itemName])

  const handleClick = (event) => {
    event.preventDefault()
    anchorTarget.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <li className='nav-item'>
      <a
        href={`#${props.itemName}`}
        onClick={handleClick}
        className='nav-text'
        style={{opacity: `${props.opacity}`}}
      >
        {props.text}
      </a>
    </li>
  )
}

export default NavItem
