import React from 'react'
import './linkbutton.css'

const LinkButton = (props) => {
  return (
    <a className={`linkbutton ${props.class}`} href={props.href} target='_blank'>
      {props.children}
    </a>
  )
}

export default LinkButton
