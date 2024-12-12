import React from "react";
import '../scss/body/resume.scss';
import resume from '../assets/pdfs/LiamGalley_CV.pdf'
import resumePhoto from '../assets/images/LiamGalley_CV-1.png'

const ResumePage: React.FC = () => {
    return (
        <div className="resume-body">
            <div className="left-resume-panel">
                <h1 id="resume">Work Experience</h1>
                <div className="experience-panel1">
                    <h2>Garderner</h2>
                    <p>06/2022 - 08/2024</p>
                    <ul>
                        <li>Use of various equipments in a fast pace environment.</li>
                        <li>Guiding new employees in proper gardening techniques.</li>
                    </ul>
                </div>

                <div className="experience-panel2">
                    <h2>Computer Science Tutor</h2>
                    <p>03/2024 - 04/2024</p>
                    <ul>
                        <li>Taught beginner friendly programming practices.</li>
                        <li>Guided new students in developing study habits.</li>
                    </ul>
                </div>

                <div className="experience-panel3">
                    <h2>Senior Chief</h2>
                    <p>06/2019 - 05/2022</p>
                    <ul>
                        <li>Kept proper safety regulations while handling food.</li>
                        <li>Trained new employees in various safety protocols.</li>
                    </ul>
                </div>

                <h1>Educational Experience</h1>
                <div className="education-panel1">
                    <h2>John Abbott College</h2>
                    <p>Graduation Expected In 05/2025</p>
                    <ul>
                        <li>Sainte-Anne-De-Bellevue, QC H9X 3L9.</li>
                    </ul>
                </div>

                <div className="education-panel2">
                    <h2>Dawson College (Certificate)</h2>
                    <p>08/2023 - 10/2023</p>
                    <ul>
                        <li>8-week online course, Zoom.</li>
                    </ul>
                </div>
            </div>

            <div className="right-resume-panel">
                <a href={resume}>
                    <img src={resumePhoto} alt="My resume" />
                </a>
            </div>
        </div>
    )
}

export default ResumePage