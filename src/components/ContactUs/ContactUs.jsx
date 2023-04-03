import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import ClockLoader from 'react-spinners/ClockLoader'
import {Checkmark} from '../../assets'

import './contactus.css'

import {RightArrow} from '../../assets'

const ContactUs = () => {
  const [mailSended, setMailSended] = useState('Available')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setMailSended('InProgress')

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMailSended('Success')
          setTimeout(() => {
            setMailSended('Available')
          }, 5000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      {mailSended === 'Available' && (
        <div className='contact-container'>
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Name' type='text' name='user_name' required />
            <input placeholder='Email address' type='email' name='user_email' required />
            <textarea placeholder='Message' name='message' required />
            <button className='send-button' type='submit'>
              <p>Send</p>
              <img src={RightArrow} alt='icon' />
            </button>
          </form>
        </div>
      )}
      {mailSended === 'InProgress' && (
        <div className='form-container'>
          <ClockLoader size={100} />
        </div>
      )}
      {mailSended === 'Success' && (
        <div className='form-container'>
          <img src={Checkmark} alt='icon' />
          <p>Your Message Successfully Sended</p>
        </div>
      )}
    </>
  )
}

export default ContactUs
