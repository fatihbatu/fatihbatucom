import React from 'react'
import './projectcard.css'

const ProjectCard = (props) => {
  return (
    <div className='projectcard-container gradient-background'>
      <div className='card-title'>
        <h3>Project Title</h3>
        <p>Project Description</p>
      </div>
      <div className='card-image' style={{backgroundImage: `url(${props.image})`}}></div>
      <div className='card-links'>
        <a href='#' className='links'>
          Github
        </a>
        <a href='#' className='links'>
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
