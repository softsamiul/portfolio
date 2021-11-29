import React from 'react';
import github from '../assets/icons/github.svg'
const ProjectCard = ({ project: { name, image, deployed_url, github_url, desc } }) => {
    return (
        <div className="projectrCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank" rel="noopener noreferrer" >
                    <img src={image} alt={name} className=" img-fluid img-animation" />
                </a>
                <div className="projectCard__title">
                    {name}
                </div>
                <div>
                    <p className="card-text">{desc}</p>
                    
                    <a href={deployed_url} target="_blank" rel="noopener noreferrer" >
                        Live View
                        <i className="fas fa-eye"></i>
                    </a>
                    <a href={github_url} target="_blank" rel="noopener noreferrer" >
                        GitHub
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
                    
                </div>
                

            </figure>

        </div >
    );
};

export default ProjectCard;