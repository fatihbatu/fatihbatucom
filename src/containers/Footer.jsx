import React from 'react'
import './footer.css'

const Footer = (props) => {
  return (
    <>
      <div className='bg-image'></div>
      {props.children}
    </>
  )
}

export default Footer
