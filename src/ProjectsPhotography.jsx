import React from "react";

import Photography01 from "./assets/images/images-photography/_1110759_60_61_62_63_64_65.jpg";
import Photography02 from "./assets/images/images-photography/_1120746.jpg";

const photoSources = [
    Photography01,
    Photography02
]

const ProjectsPhotography = () => {
    return (
        <div className="ProjectsPhotography">
            <h1>
                Photography
            </h1>
           <div className="gallery-wrapper">
                {photoSources.map((photoSource) => (
                        <div className="image-wrapper"> 
                            <img src={photoSource} />
                        </div> 
                ))} 
            </div>
        </div>
    )
}

export default ProjectsPhotography;

// Change state for image url
// div element images are shown in, highlighted
// layout of thumbnnails div?
// onclick handler when click thumbnail changes image highlighted
// how to get images into the file temporarily link to image online 