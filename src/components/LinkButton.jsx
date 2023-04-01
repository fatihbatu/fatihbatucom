import React from 'react'
import './linkbutton.css'

const LinkButton = (props) => {
  return <div className={`linkbutton ${props.class}`}>{props.children}</div>
}

export default LinkButton
