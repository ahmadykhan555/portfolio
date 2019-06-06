import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return(
        <div className="project-card">
            <div className="project-card__detail">
                <div className="project-card__title">{props.projectTitle || 'Project Title'}</div>
                <div className="project-card__tech-stack">{props.stack|| 'Tech-stack'}</div>
                <div className="separator"></div>
                <div className="learn-more">
                    <a href={props.url || 'google.com.pk'} target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;