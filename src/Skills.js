import React from 'react'
import SKILLS_DATA from '../src/components/data/skills_data.js';

import REACT_IMG from './assets/skills/react.png'; 
import JAVASCRIPT_IMG from './assets/skills/javascript.png'; 
import HTML_IMG from './assets/skills/html.png'; 
import CSS_IMG from './assets/skills/CSS-Logo.png'; 
import BOOTSTRAP from './assets/skills/bootstrap.png'; 
import TAILWINDCSS from './assets/skills/tailwind_css.png'; 
import NODEJS from './assets/skills/nodejs.png'; 
import EXPRESSJS from './assets/skills/express.png'; 
import MUI from './assets/skills/mui.png'; 
import PHP from './assets/skills/php.png'; 
import HEROKU from './assets/skills/heroku.png'; 
import FIREBAE from './assets/skills/firebase.png'; 
import GITHUB from './assets/skills/github.png'; 
import NETLIFY from './assets/skills/netlify.png'; 
import WORDPRESS from './assets/skills/wordpress.png'; 

export default function Skills() {
    return (
        <div className="projects" style={{width:'80%', margin:'0 auto'}}>
            <h4 style={{fontWeight:'bold'}}>Skills</h4>
            {/* Proficient Skills */}
            <div className="proficient">
                <h6 className="text-2xl font-bold">Proficient</h6>
                <div className="grid grid-cols-6">
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={REACT_IMG} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={JAVASCRIPT_IMG} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={HTML_IMG} alt="" />
                    </div>
                    <div style={{width:"50px", height:"84px"}}>
                        <img className="img-fluid" src={CSS_IMG} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={BOOTSTRAP} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={TAILWINDCSS} alt="" />
                    </div>
                </div> 
            </div>

            {/* Familiar Skills */}
            <div className="proficient">
                <h6 className="text-2xl font-bold">Familiar</h6>
                <div className="grid grid-cols-6">
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={NODEJS} alt="" />
                    </div>
                    <div style={{width:"200px", margin:'0 auto'}} className="col-span-2">
                        <img className="img-fluid" src={EXPRESSJS} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={MUI} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={PHP} alt="" />
                    </div>
                    
                </div> 
            </div>

            {/* Web Tools */}
            <div className="proficient">
                <h6 className="text-2xl font-bold">Web Tools</h6>
                <div className="grid grid-cols-6">
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={HEROKU} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={FIREBAE} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={GITHUB} alt="" />
                    </div>
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={NETLIFY} alt="" />
                    </div>
                    
                </div> 
            </div>

            {/* CMS*/}
            <div className="proficient">
                <h6 className="text-2xl font-bold">CMS</h6>
                <div className="grid grid-cols-6">
                    <div style={{width:"50px"}}>
                        <img className="img-fluid" src={WORDPRESS} alt="" />
                    </div>
                </div> 
            </div>
        </div>
    )
}
