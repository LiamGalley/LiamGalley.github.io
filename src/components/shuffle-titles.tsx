import React, { useEffect, useState } from "react";


const ShuffleTitles = () => {
    const titles = [
        "Web Developer",
        "Software Developer",
        "Tech Enthusiast",
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);

                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval)
    }, [])

    return (
        <h2
            style={{
                fontSize: "3rem",
                lineHeight: 0,
                fontWeight: "bold",
                textAlign: "center",
                color: "#fc8225",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease", // Smooth fade
            }}>
            {titles[currentIndex]}
        </h2>
    )
}

export default ShuffleTitles