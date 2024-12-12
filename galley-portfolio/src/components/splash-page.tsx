import React from "react";
import '../scss/body/splash-page.scss';
import ShuffleTitles from "./shuffle-titles";

const SplashPage: React.FC = () => {
    return (
        <div className="splash-body">
            <div id="home" className="top-splash-panel">
                <h1 className="pre-title">THE COZY, WARM HOMESTEAD OF</h1>
                <h1 className="title">LIAM GALLEY</h1>
                <ShuffleTitles />
            </div>
            <hr className="splash-page-line"></hr>
            <div className="bottom-splash-panel">
                <p>A portfolio to answer all of your questions, but if you don't find
                    what you're looking for, then take a look at my <a href="">socials</a> and
                    ask me a question anywhere.
                </p>
                <a href="https://www.linkedin.com/in/liam-galley/"><button>Lets Collobrate!</button></a>
            </div>
        </div>
    );
}

export default SplashPage