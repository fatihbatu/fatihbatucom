import React from 'react'
import './main.css'

import Footer from './Footer'
import {Button, Card, ContactUs, LinkButton, NavItem, ProjectCard} from '../components'
import {categories} from '../utils/data'
import {
  Linkedin,
  Github,
  Javascript,
  ReactJS,
  NodeJS,
  ExpressJS,
  MongoDB,
  Figma,
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
} from '../assets'

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
            <Button bg='black' color='white' itemName='contact'>
              <p>Contact Me</p>
            </Button>
            <div className='link-group'>
              <LinkButton href='https://linkedin.com/in/fatihbatu'>
                <img src={Linkedin} alt='linkedin' />
              </LinkButton>
              <LinkButton href='https://github.com/fatihbatu'>
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
      <section id='projects' className='projects'>
        {categories.slice(0, categories.length).map((category) => (
          <ProjectCard
            key={category.name}
            title={category.title}
            description={category.description}
            github={category.github}
            demo={category.demo}
            image={category.image}
          />
        ))}
      </section>
      <section className='projects'>
        <ProjectCard image={ProjectThree} />
        <ProjectCard image={ProjectFour} />
      </section>
      <footer id='contact' className='slider-thumb'>
        <Footer>
          <div className='footer-area'>
            <h3>Want to work together?</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <div className='card-bottom'>
              {/* <Button mailto='mailto:no-reply@example.com' bg='black' color='white'>
                <p>Contact Me</p>
              </Button> */}
              <Button bg='white' color='black'>
                <p>My Resume</p>
              </Button>
              <div className='link-group'>
                <LinkButton href='https://linkedin.com/in/fatihbatu'>
                  <img src={Linkedin} alt='linkedin' />
                </LinkButton>
                <LinkButton href='https://github.com/fatihbatu'>
                  <img src={Github} alt='github' />
                </LinkButton>
              </div>
            </div>
          </div>
          <ContactUs />
        </Footer>
      </footer>
    </div>
  )
}

export default Main
