import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button className='button' style={{backgroundColor: props.bg, color: props.color}}>
      {props.children}
    </button>
  )
}

export default Button