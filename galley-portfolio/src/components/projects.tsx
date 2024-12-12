import React from "react";
import '../scss/body/projects.scss';
import ProjectCard from "./ProjectCard";
import futurefit from "../assets/images/FutureFit.png"
import encryption from "../assets/images/En-De-Cryption.png"
import portfolio from "../assets/images/Galley_Portfolio.png"

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-body">
            <h1>Projects</h1>

            <div className="project-cards">
                <ProjectCard
                    title="FutureFit"
                    description="FutureFit is a mobile application built on Kotlin that is used to empower & motivate people
                    to workout and gain a healthier life style."
                    github="https://github.com/LiamGalley/FutureFit"
                    background={futurefit}>
                </ProjectCard>
                <ProjectCard
                    title="En-De Cryption"
                    description="A UI that is used to encrypt and decrpyt various ciphers, used as similarly to that of a language translator."
                    github="https://github.com/LiamGalley/En-De-Cryption"
                    background={encryption}>
                </ProjectCard>
                <ProjectCard
                    title="Portfolio Project"
                    description="Well if you've gotten this far, then it already works as intended!"
                    github="..."
                    background={portfolio}>
                </ProjectCard>
            </div>
        </div>
    )
}

export default ProjectsPage