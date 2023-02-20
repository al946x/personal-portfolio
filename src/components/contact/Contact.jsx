import React from 'react'
import './contact.css'
import {BsEnvelope} from 'react-icons/bs'

const Contact = () => {
  return (
<section id='contact'>
      <h5>Contact me to get in touch and begin your digital journey!</h5>
      <h2>Contact</h2>
      </section>
)
 }
    
      



  // return (
  //   <section id='contact'>
  //     <h5>Contact me to get in touch and begin your digital journey!</h5>
  //     <h2>Contact</h2>
  //     <div className="contact-container">
  //       <div className="contact-options">
  //         <article className="contact-option">
  //           <BsEnvelope className="contact-option-icon"/>
  //           <h4>E-mail</h4>
  //           <a href="mailto:alina.zenam@hotmail.com" >Email Me</a>
  //         </article>
  //       </div>
  //         <form ref={form} onSubmit={sendEmail}>
  //           <input type="text" name="name" placeholder="Your Name" required />
  //           <input type="email" name="email" placeholder="Your Email" required />
  //           <textarea name="message" rows="7" required placeholder="Message"></textarea>
  //           <button type="submit" className="btn-primary">Send</button><span>{msg}</span>
  //         </form>
  //     </div>
  //   </section>
  // )

export default Contact;