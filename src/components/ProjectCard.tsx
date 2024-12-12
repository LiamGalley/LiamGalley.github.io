import React from "react";
import '../scss/body/project-card.scss';

interface ProjectCardProps {
    title: string,
    description: string,
    github: string,
    background: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, background }) => (
    <div className="project-card" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    Check it out on Github!
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;
