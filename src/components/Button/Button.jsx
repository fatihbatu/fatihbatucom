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

  function openTab() {
    window.open('/resume.pdf', '_blank')
  }
  return (
    <button
      href={`#${props.itemName}`}
      onClick={props.click === 'handleClick' ? handleClick : openTab}
      className='button'
      style={{backgroundColor: props.bg, color: props.color}}
    >
      {props.children}
    </button>
  )
}

export default Button
