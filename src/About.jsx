import React from "react";

import Headshot01 from "./assets/images/headshot.jpg";
const headshotSources = [
    Headshot01
]

const About = () => {
    return (
        <div className="About">
            <h2>
                Scizors
            </h2>
            


            {/* <div className="gallery-wrapper">
                {headshotSources.map((headshotSource) => (
                        <div className="image-wrapper"> 
                            <img src={headshotSource} />
                        </div>
                ))}
            </div>  */}

            <p>
                I am currently in a mentorhsip program with Emergent Works learning web development. I am studying HTML, CSS, JavaScript, NODE, & React.  <a href="https://www.emergentworks.org/"> www.emergentworks.org.</a>
            </p>
            
            
            <p>
                    In my past I have done creative work as a professional gardener for Continuum Gardens in Seattle WA, and as a silversmith while I lived in San Cristobal del las Casas, Chiapas, Mexico in 2009-2010.  I enjoy amateur photography and love to take photos while I travel.  You can see more about all of this and the work I have done as a web developer in the projects section of this website.
            </p>
            <p>
            Icons used on this site were created by Priyanka, Eucalyp, Jemis Mali, Hadi, Iconixar, Iconcheese, Caio Nery Filho, Yamini Ahluwalia, Rivda, & ProSymbols from the Noun Project  <a href="https://thenounproject.com/"> www.thenounproject.com</a>
            </p>

        </div>
    )
}

export default About;


