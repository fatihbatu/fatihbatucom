import React from 'react'
import './projectcard.css'

const ProjectCard = () => {
  return (
    <div className='projectcard-container'>
      <div className='card-title'>
        <div className='titles'>
          <h3>Project Title</h3>
          <p>Project Description</p>
        </div>
      </div>
      <div className='card-image'></div>
      <div className='card-links'>
        <div className='links'>Github</div>
        <div className='links'>Live Demo</div>
      </div>
    </div>
  )
}

export default ProjectCard
