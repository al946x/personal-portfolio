import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'




const Header = () => {
    return (
        <header>
            <div className="container.header_container">
                <h1> Hello, I'm Alina Zenam</h1>
                <h5 className='text-light'> Front End Developer</h5>
                <CTA />
                <HeaderSocials />

                <a href="#contact" className='scroll_down'>Scroll Down</a>


            </div>
        </header>
    )
}

export default Header;
