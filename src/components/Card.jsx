import React from 'react'
import './card.css'

const Card = (props) => {
  return <div className={`card-container ${props.class}`}>{props.children}</div>
}

export default Card
