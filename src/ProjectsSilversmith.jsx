import React from "react";

import Silversmithing00 from "./assets/images/images-silversmithing/silversmithing00.jpg";
import Silversmithing01 from "./assets/images/images-silversmithing/silversmithing01.jpg";
import Silversmithing02 from "./assets/images/images-silversmithing/silversmithing02.jpg";
import Silversmithing03 from "./assets/images/images-silversmithing/silversmithing03.jpg";
import Silversmithing04 from "./assets/images/images-silversmithing/silversmithing04.jpg";
import Silversmithing05 from "./assets/images/images-silversmithing/silversmithing05.jpg";
import Silversmithing06 from "./assets/images/images-silversmithing/silversmithing06.jpg";
import Silversmithing07 from "./assets/images/images-silversmithing/silversmithing07.jpg";
import Silversmithing08 from "./assets/images/images-silversmithing/silversmithing08.jpg";
import Silversmithing09 from "./assets/images/images-silversmithing/silversmithing09.jpg";
import Silversmithing10 from "./assets/images/images-silversmithing/silversmithing10.jpg";
import Silversmithing11 from "./assets/images/images-silversmithing/silversmithing11.jpg";
import Silversmithing12 from "./assets/images/images-silversmithing/silversmithing12.jpg";
import Silversmithing13 from "./assets/images/images-silversmithing/silversmithing13.jpg";
import Silversmithing14 from "./assets/images/images-silversmithing/silversmithing14.jpg";
import Silversmithing15 from "./assets/images/images-silversmithing/silversmithing15.jpg";
import Silversmithing16 from "./assets/images/images-silversmithing/silversmithing16.jpg";
import Silversmithing17 from "./assets/images/images-silversmithing/silversmithing17.jpg";
import Silversmithing18 from "./assets/images/images-silversmithing/silversmithing18.jpg";
import Silversmithing19 from "./assets/images/images-silversmithing/silversmithing19.jpg";
import Silversmithing20 from "./assets/images/images-silversmithing/silversmithing20.jpg";
import Silversmithing21 from "./assets/images/images-silversmithing/silversmithing21.jpg";
import Silversmithing22 from "./assets/images/images-silversmithing/silversmithing22.jpg";

const silversmithSources = [
    Silversmithing00,
    Silversmithing01,
    Silversmithing02,
    Silversmithing03,
    Silversmithing04,
    Silversmithing05,
    Silversmithing06,
    Silversmithing07,
    Silversmithing08,
    Silversmithing09,
    Silversmithing10,
    Silversmithing11,
    Silversmithing12,
    Silversmithing13,
    Silversmithing14,
    Silversmithing15,
    Silversmithing16,
    Silversmithing17,
    Silversmithing18,
    Silversmithing19,
    Silversmithing20,
    Silversmithing21,
    Silversmithing22
]
const ProjectsSilversmith = () => {
    return (
        <div className="ProjectsSilversmith">
            <h1>
                Silversmithing
            </h1>
            <p>
                I was a Silversmith in San Christobal de las Casas, Chiapas, Mexico 2009-2010. Each piece of jewelry was hand crafted and one of a kind. These photos have low image quality as they were taken on an old iPhone6.
            </p>
            <div className="gallery-wrapper">
                {silversmithSources.map((silversmithSource) => (
                        <div className="image-wrapper"> 
                            <img src={silversmithSource} />
                        </div>
                ))}
            </div> 
        </div>
    )
}

export default ProjectsSilversmith;
