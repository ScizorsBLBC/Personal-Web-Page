import React from "react";

import Headshot01 from "./assets/images/headshot.jpg";

const headshotSources = [
    Headshot01
]

const About = () => {
    return (
        <div className="About">
            <h1>
                Scizors
            </h1>
            <p>
                I am currently in a mentorhsip program with Emergent Works learning web development. <a href="https://www.emergentworks.org/"> www.emergentworks.org </a>
            </p>
            <div className="gallery-wrapper">
                {headshotSources.map((headshotSource) => (
                        <div className="image-wrapper"> 
                            <img src={headshotSource} />
                        </div>
                ))}
            </div> 
        </div>
    )
}

export default About;

// icons from: landscape by Eucalyp from the Noun Project https://thenounproject.com/search/?q=landscaping&i=3154900, Scissors by Jemis mali from the Noun Project https://thenounproject.com/search/?q=scissors&i=968448, 
