import React, {useEffect, useState} from 'react'
import './button.css'

const Button = (props) => {
  const [anchorTarget, setAnchorTarget] = useState(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(props.itemName))
  }, [props.itemName])

  const handleClick = (event) => {
    event.preventDefault()
    anchorTarget.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <button
      href={`#${props.itemName}`}
      onClick={handleClick}
      className='button'
      style={{backgroundColor: props.bg, color: props.color}}
    >
      {props.children}
    </button>
  )
}

export default Button
