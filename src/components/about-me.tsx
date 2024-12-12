import React from "react";
import '../scss/body/about-me.scss';
import Liam from '../assets/images/Liam(5).webp'

const AboutMePage: React.FC = () => {
    return (
        <div className="about-me-body">
            <div className="about-me-left-panel">
                <h2 id="about-me">About Me</h2>
                <p>
                    Good morning, good evening or goodnight, for whenever you may be reading this. My
                    name is <a href="https://www.linkedin.com/in/liam-galley/">Liam Galley</a> <i>(Next to the good looking guy on the right)</i> and I'm a software
                    developer based in the good ol' city of Montreal. My passion started over 8 years ago, I had
                    saved up every dollar I got and finally got parts to build a PC, I asked my dad to help me and
                    I've been thrown into the world of computers ever since!
                    <br /><br />
                    Currently I'm studying at <a href="https://johnabbott.qc.ca">John Abbott College</a> completing
                    my last semester in the Computers Sciences program (420.B0). Throughout my time here, I've
                    learned a variety of different skills/languages/algorithms including but not limited to, C#,
                    Python, SQL, JS/TS, ASP.NET, Kotlin and <a href="">more</a>.
                    <br /><br />
                    While I've garned manyskills at school, I've also taken my passion beyond. With my vast
                    interesting in almost any topic, I've attended a plethora of tech events including, hackathons,
                    warhacks, conferences (<a href="https://nsec.io">NSEC</a>), etc... Although I'm currently focused
                    on Full Stack Web Development, Game Development and exploring AI.
                    <br /><br />
                    Of course these aren't the only things I do. Outside you'll find me enjoying life! I'm an avid climber
                    (<a href="https://www.betabloc.ca/en/">Beta Bloc</a>), you'll also often find me at the peak of
                    any <a href="https://www.instagram.com/p/C-1dkFjOgcR/?img_index=1">mountain</a> I can climb. But if I'm
                    not outdoors, you'll find me fanatically loving <a href="https://www.instagram.com/jacdndclub/">Dungeons & Dragons</a>.
                </p>
            </div>

            <div id="photo-shuffle" className="about-me-right-panel">
                <img src={Liam} alt="Photos of me."></img>
            </div>
        </div>
    );
}

export default AboutMePage