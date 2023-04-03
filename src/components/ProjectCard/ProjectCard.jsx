import React from 'react'
import './projectcard.css'

const ProjectCard = (props) => {
  return (
    <div className='projectcard-container gradient-background'>
      <div className='card-title'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className='card-image' style={{backgroundImage: `url('${props.image}')`}}></div>
      <div className='card-links'>
        <a href={props.github} target='_blank' className='links'>
          Github
        </a>
        <a href={props.demo} target='_blank' className='links'>
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
