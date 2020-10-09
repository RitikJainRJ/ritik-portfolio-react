import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const { title, description, link, image } = props.project;
    return (
        <div style = {{ display: 'inline-block', width : 400, margin : 10}}>
            <h3>{title}</h3>
            <img src = {image} style = {{ width : 200, height : 120}} alt = 'project'/>
            <p>{description}</p>
            <a href = {link}>{link}</a>
        </div>
    );
}

const Projects = () => {
    return(
        <div>
            <h2>Highlighted Projects</h2>
            {
                PROJECTS.map(PROJECT => {
                    return (
                        <Project key = {PROJECT.id} project = {PROJECT}/>
                    );
                })
            }
        </div>
    );
}

export default Projects;