import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Avatar from '../../images/Avatar.jpg'




const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className= "header-left">
                <h5> Hello, I'm Alina A.</h5>
                <h3>Crafting Cutting-Edge Web Experiences</h3>
                <h1> Front End Developer</h1> 
                <CTA />
                </div>
                <a href="#contact" className='scroll-down'>Scroll Down</a>
            <HeaderSocials />
<div class= "avatar-img"> <img src= {Avatar} style= {{  width: 420,
  height: 420, borderRadius: 200, overflow: 'hidden', }} /> </div>
</div>
        </header>
    )
}

export default Header;
