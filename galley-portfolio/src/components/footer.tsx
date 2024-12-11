import React, { FC } from "react";
import '../scss/footer/footer.scss';

interface Icons {
    svg: string;
    alt: string;
    link: string;
}

interface FooterProps {
    iconList: Icons[];
}

const Footer: React.FC<FooterProps> = ({ iconList }) => {
    return (
        <footer>
            <div className="leftSection">
                <p>Forged & Constructed in the fires of <a href="https://lotr.fandom.com/wiki/Khazad-dûm">Khazad-dûm</a>.</p>
            </div>

            <div className="middleSection">
                <p>&copy; Liam Galley 2024</p>
            </div>

            <div className="rightSection">
                <ul className="socialIcons">
                    {iconList.map((icon, index) => (
                        <li key={index}>
                            <a href={icon.link}><img className="icons" src={icon.svg} alt={icon.alt} /></a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer >
    );
}

export default Footer