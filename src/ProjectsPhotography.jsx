import React from "react";
import Card from "@mui/material/Card";

import Photography01 from "./assets/images/images-photography/1110759_60_61_62_63_64_65.png";
import Photography02 from "./assets/images/images-photography/1120118_19_20_21_22_23_24.jpg";
import Photography03 from "./assets/images/images-photography/1120312_3_4_5_6_7_8.jpg";
import Photography04 from "./assets/images/images-photography/1120471_2_3_4_5_6_7.jpg";
import Photography05 from "./assets/images/images-photography/1120746.jpg";
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
  Photography18,
];

const ProjectsPhotography = () => {
  return (
    <div className="ProjectsPhotography">
      <div className="ProjectsPhotographyText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h2>photography</h2>
          <p>
            scizors has been a photographer for 29 years and has a backlog of
            thousands of photos
          </p>
          <p>
            these images were shot on a Panasonic Lumix GF1 camera, mostly using
            an f1.7 20mm pancake lens
          </p>
        </Card>
      </div>
      <div className="gallery-wrapper">
        {photoSources.map((photoSource) => (
          <div className="image-wrapper">
            <img src={photoSource} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPhotography;
//TODO:
// Change state for image url
// div element images are shown in, highlighted
// layout of thumbnnails div?
// onclick handler when click thumbnail changes image highlighted
// how to get images into the file temporarily link to image online
