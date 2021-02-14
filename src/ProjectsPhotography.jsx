import React from "react";

import Photography01 from "./assets/images/images-photography/_1110759_60_61_62_63_64_65.png";
import Photography02 from "./assets/images/images-photography/_1120118_19_20_21_22_23_24.jpg";
import Photography03 from "./assets/images/images-photography/_1120312_3_4_5_6_7_8.jpg";
import Photography04 from "./assets/images/images-photography/_1120471_2_3_4_5_6_7.jpg";
import Photography05 from "./assets/images/images-photography/_1120746.jpg";
import Photography06 from "./assets/images/images-photography/P1040958.jpg";
import Photography07 from "./assets/images/images-photography/P1050151.jpg";
import Photography08 from "./assets/images/images-photography/P1050248.jpg";
import Photography09 from "./assets/images/images-photography/P1050712.jpg";
import Photography10 from "./assets/images/images-photography/P1050745.jpg";
import Photography11 from "./assets/images/images-photography/P1070293.jpg";
import Photography12 from "./assets/images/images-photography/P1070349.jpg";
import Photography13 from "./assets/images/images-photography/P1070364.jpg";
import Photography14 from "./assets/images/images-photography/P1070435.jpg";
import Photography15 from "./assets/images/images-photography/P1070625.jpg";
import Photography16 from "./assets/images/images-photography/P1070633.jpg";
import Photography17 from "./assets/images/images-photography/P1070852.jpg";
import Photography18 from "./assets/images/images-photography/P1140211.jpg";


const photoSources = [
    Photography01,
    Photography02,
    Photography03,
    Photography04,
    Photography05,
    Photography06,
    Photography07,
    Photography08,
    Photography09,
    Photography10,
    Photography11,
    Photography12,
    Photography13,
    Photography14,
    Photography15,
    Photography16,
    Photography17,
    Photography18
    
]

const ProjectsPhotography = () => {
    return (
        <div className="ProjectsPhotography">
            <div className="ProjectsPhotographyText">
                <h2>
                    Photography
                </h2>
                <p>
                    I am an avid amateur photographer. These images were shot on a Panasonic Lumix GF1 camera and edited using Adobe Lightroom.
                </p>
            </div>
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