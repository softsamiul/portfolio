import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/samiul_islam.jpg'
import resume from '../assets/Samiul-Islam-resume-frontend-developer-11-27-21.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Samiul Islam </div>
            <div className=" sidebar__title"> Frontend Developer </div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <i className="fas fa-download sidebar__icon mr-2"></i>Download Resume
                </div>
            </a>
            
            <div className="sidebar__contact">
                {/* <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/softsamiul" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div> */}
                <div className="sidebar__location">
                    <i class="fas fa-map-marker-alt sidebar__icon mr-2 "></i>
                    Kolkata, India
                </div>
                <div className="sidebar__item">
                    <i class="fas fa-envelope-open sidebar__icon mr-2"></i>
                    softsamiul@gmail.com
                </div>
                <div className="sidebar__item">
                    <i class="fas fa-phone-square sidebar__icon mr-2"></i>
                    +91 7478803500
                </div>
                {/* <div className="sidebar__item">
                    <i class="fas fa-phone-square sidebar__icon mr-2"></i>
                    +91 9933059368
                </div> */}
            </div>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.linkedin.com/in/softsamiul/" target="_blank" >
                    <i class="fab fa-linkedin mr-3" style={{color:"#0A66C2"}}></i>
                </a>
                <a href="https://github.com/softsamiul" target="_blank">
                    <i class="fab fa-github-square"></i>
                </a>
            </figure>

            {/* <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div> */}

            <button className=" sidebar__email" onClick={handleEmailMe}>Contact Me</button>
        </motion.div>
    )
}

export default Sidebar;