import React from 'react'
import './about.css'
import me from '../../images/me.png'
import {HiOutlineDesktopComputer} from 'react-icons/hi'


const About = () => {
    return (
       <section id='about'>  
       <h2>About Me</h2>
        <div className='about-container'>
            <div className = "about-me"> 
            <div className='me-image'>
              <img src = {me} />
            </div>
            </div>
    <div classname = "about-content">
        <div classname = "skills-cards">
        <article classname = "skills-card"> 
<HiOutlineDesktopComputer/><h5>Applications and Technologies</h5>

 <small>Bootstrap jQuery React.js Apis UX Design Git/GitHub Node</small>
    
</article> 
<article classname = "skills-card"> 
    <HiOutlineDesktopComputer/><h5>Technical Languages</h5>
    <small>HTML5 CSS3 JavaScript </small>
    </article>
    <article classname = "skills-card"> 
    <HiOutlineDesktopComputer/><h5>Skills</h5>
   <smalll>Agile Development, UX and UI Design, Scrum, Responsive Web Design, Technical Presentations and
Group Projects</smalll> 

    </article>
    </div>
    <p> Hold a unique combination of technical, creative and problem-solving skills. Ability to create engaging and responsive web applications with clean and maintainable code and a focus on accessibility. A proven record of developing and implementing web projects from concept to launch. Passion for creating visually appealing and user-friendly web applications and keen to continue learning new technologies.</p>

</div> 
 </div> 
</section>
       
    )
}

export default About;