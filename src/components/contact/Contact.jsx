import React from 'react'
import './contact.css'
import {BsEnvelope} from 'react-icons/bs'


const Contact = () => {
  return (
<section id='contact'>
      
      <h2>Contact</h2>
      <div className="contact-container">
    <div className="contact-options">
   <article className="contact-option">
  <BsEnvelope className="contact-option-icon"/>
  <h4>E-mail</h4>
  <a href="mailto:alina.zenam@hotmail.com" >Email Me</a>
  </article>
  </div>

  <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="77b757f6-a36b-48fc-9311-f5b958e9b94c" />
     <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
         <textarea name="message" rows="7" required placeholder=" Your Message"></textarea>
      <button type="submit" className="btn" style={{ alignSelf: "center" }}>Send Message</button>
       </form>
  </div>
      </section>
)
 }
    

export default Contact;