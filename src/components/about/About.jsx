import React from 'react'
import './about.css'
import me from '../../images/me.png'
import {HiOutlineDesktopComputer} from 'react-icons/hi'


const About = () => {
    return (
       <section id='about'>  
       <h2>About</h2>
        <div className='about-container'>
            <div className = "about-me"> 
            <div className='me-image'>
              <img src = {me} />
            </div>
            </div>
    <div className = "about-content">
        <div className = "skills-cards">
        <article className = "skills-card"> 
<HiOutlineDesktopComputer/><h5>Applications and Frameworks</h5>

 <small>Bootstrap, jQuery, React, APIs, Git/GitHub & Node</small>
    
</article> 
<article className = "skills-card"> 
    <HiOutlineDesktopComputer/><h5>Technical Languages</h5>
    <small>HTML5, CSS3 & JavaScript </small>
    </article>
    <article className = "skills-card"> 
    <HiOutlineDesktopComputer/><h5>Skills</h5>
   <small>Agile Development, UX/UI Design & Responsive Web Design </small> 

    </article>
    </div>
    <p> As a motivated Front End Developer, I bring a unique blend of technical, creative, and problem-solving skills to the table. I have a strong focus on accessibility and attention to detail, allowing me to engineer responsive web applications with clean and maintainable code. With a proven record of taking web projects from concept to launch, I'm also a great team player who enjoys collaborating with others to deliver high-quality results on time. I'm passionate about creating visually appealing and user-friendly websites, and eager to learn and stay up to date with new technologies. </p>

</div> 
 </div> 
</section>
       
    )
}

export default About;