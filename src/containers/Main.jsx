import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import './main.css'
import LinkButton from '../components/LinkButton'
import ProjectCard from '../components/ProjectCard'

import {Linkedin, Github, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, Figma} from '../assets'

const Main = () => {
  return (
    <div className='main'>
      <section className='information'>
        <Card class='gradient-background1'>
          <h3>Hello, I’m Fatih BATU,a Full-Stack Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className='card-bottom'>
            <Button bg='black' color='white'>
              <p>Contact Me</p>
            </Button>
            <div className='link-group'>
              <LinkButton>
                <img src={Linkedin} alt='linkedin' />
              </LinkButton>
              <LinkButton>
                <img src={Github} alt='github' />
              </LinkButton>
            </div>
          </div>
        </Card>
        <Card class='gradient-background2'>
          <h2>There are Languages, Frameworks, Libraries and Tools that I use these days.</h2>
          <div className='tools-area'>
            <LinkButton class='tool'>
              <img src={Javascript} alt='javascript' />
            </LinkButton>
            <LinkButton class='tool'>
              <img src={ReactJS} alt='reactjs' />
            </LinkButton>
            <LinkButton class='tool'>
              <img src={NodeJS} alt='nodejs' />
            </LinkButton>
            <LinkButton class='tool'>
              <img src={ExpressJS} alt='github' />
            </LinkButton>
            <LinkButton class='tool'>
              <img src={MongoDB} alt='mongodb' />
            </LinkButton>
            <LinkButton class='tool'>
              <img src={Figma} alt='figma' />
            </LinkButton>
          </div>
        </Card>
      </section>
      <section className='projects'>
        <ProjectCard />
        <ProjectCard />
      </section>
      <section className='projects'>
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  )
}

export default Main
