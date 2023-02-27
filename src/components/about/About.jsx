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
    <p> I have a passion for creating visually appealing and user-friendly web applications. A unique combination of technical, creative and problem-solving skills. I'm ready to bring this skill set and passion to every job I take on. </p>

</div> 
 </div> 
</section>
       
    )
}

export default About;