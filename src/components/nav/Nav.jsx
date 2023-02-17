import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {MdOutlineContactSupport} from 'react-icons/md';








const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav className="nav">
           
                <a href="#" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#' ? 'active' : ''}><BsPersonCircle/></a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className= {activeNav === '#' ? 'active' : ''}><HiOutlineBookOpen/></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#' ? 'active' : ''}><MdOutlineContactSupport/></a>
        
        </nav>
    )
}

export default Nav;