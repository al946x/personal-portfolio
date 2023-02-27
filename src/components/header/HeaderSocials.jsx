import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/alina-a-80449b23b/" target="_blank"><BsLinkedin size={20}/>
            </a>
            <a href="https://github.com/al946x" target="_blank"><BsGithub size={20}/>
            </a>
            <a href="mailto:alina.zenam@hotmail.com" target="_blank"><MdEmail size={22}/>
            </a>
        </div>
    )
}

export default HeaderSocials;