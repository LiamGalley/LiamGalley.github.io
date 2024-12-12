import React from "react";
import '../scss/body/splash-page.scss';
import ShuffleTitles from "./shuffle-titles";

const SplashPage: React.FC = () => {
    return (
        <div className="body">
            <div className="top-splash-panel">
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
                <button>Lets Collobrate!</button>
            </div>
        </div>
    );
}

export default SplashPage