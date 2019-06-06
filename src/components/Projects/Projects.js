import React from 'react';
import './Projects.css';
import ProjectCard from '../Project-card/ProjectCard';

const Projects = (props) => {
    return(
        <div className="projects">
            <div className="page-title projects-page-title">Projects</div>
            <div className="project-type-filter">
                <div className="project-type filter-item selected">All</div>
                <div className="project-type filter-item">NodeJs</div>
                <div className="project-type filter-item">AngularJs</div>
                <div className="project-type filter-item">ReactJs</div>
                <div className="project-type filter-item">MERN Stack</div>
                <div className="project-type filter-item">MEAN Stack</div>
            </div>
            <div className="projects-gallery">
                {props.projects.map(project => {
                    return (
                        <ProjectCard 
                            projectTitle={project.title}
                            stack={project.stack}
                            url={project.url}
                        />
                    )
                    })}
            </div>
        </div>
    );
}

export default Projects;