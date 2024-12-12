import React, { useEffect, useRef } from "react";
import '../scss/header/nav-bar.scss';

interface NavProps {
    title: string;
}

const NavBar: React.FC<NavProps> = ({ title }) => {
    const navBarRef = useRef<HTMLDivElement | null>(null); // Reference for the navbar element.
    let lastScroll = 0; // Used to track the last scroll position.

    useEffect(() => {
        // Defining the scroll event handler.
        const handleScroll = () => {
            const currentScroll = window.scrollY; // Retrieves current vertical position.

            // Checks to see if the user is scrolling down or up, changes hidden class accordingly.
            if (navBarRef.current)
                if (currentScroll > lastScroll)
                    navBarRef.current.classList.add("hidden");
                else
                    navBarRef.current.classList.remove("hidden");

            // Updates the latest scroll time for next scroll event.
            lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleans up the event listener on unmount to prevent memory leaks.
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []); // Empty dependency array ensures the effect only runs once the component mounts.

    return (
        <nav ref={navBarRef} className="navBar">
            <h1 className="title">{title}</h1>
            <ul className="navList">
                <li className="navItem">
                    <a href="#home" className="navLink"> Home </a>
                </li>
                <li className="navItem">
                    <a href="#about-me" className="navLink"> About </a>
                </li>
                <li className="navItem">
                    <a href="#resume" className="navLink"> Resume </a>
                </li>
                <li className="navItem">
                    <a href="#projects" className="navLink"> Projects </a>
                </li>
                <li className="navItem">
                    <a className="navLink"> Techstack </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;