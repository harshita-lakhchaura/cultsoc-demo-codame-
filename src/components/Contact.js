import React from 'react'
import '../styling/contact.scss'

export default function Contact() {
  return (
    <div>
      <section id='contact'>
        <div className='top-section-contact'>
          <h1>Contact Us</h1>
          <p>We would love to hear from you</p>
        </div>
        <div className='forms'>
        <form>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Contact Number'/>
        </form>
        <textarea className='message' type="text" placeholder='Message'/>
        </div>
        <button className='submit'>Send Message</button>
      </section>
    </div>
  )
}
