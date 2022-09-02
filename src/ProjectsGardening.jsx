import React from "react";

import Gardening01 from "./assets/images/images-gardening/commercial01.jpg";
import Gardening02 from "./assets/images/images-gardening/commercial02.jpg";
import Gardening03 from "./assets/images/images-gardening/commercial04.jpg";
import Gardening04 from "./assets/images/images-gardening/commercial05.jpg";
import Gardening05 from "./assets/images/images-gardening/containers01.jpg";
import Gardening06 from "./assets/images/images-gardening/containers02.jpg";
import Gardening07 from "./assets/images/images-gardening/containers03.jpg";
import Gardening08 from "./assets/images/images-gardening/ediblegarden01.jpg";
import Gardening09 from "./assets/images/images-gardening/ediblegarden02.jpg";
import Gardening10 from "./assets/images/images-gardening/ediblegarden03.jpg";
import Gardening11 from "./assets/images/images-gardening/ediblegarden04.jpg";
import Gardening12 from "./assets/images/images-gardening/ediblegarden05.jpg";
import Gardening13 from "./assets/images/images-gardening/formal01.jpg";
import Gardening14 from "./assets/images/images-gardening/formal02.jpg";
import Gardening15 from "./assets/images/images-gardening/formal03.jpg";
import Gardening16 from "./assets/images/images-gardening/formal04.jpg";
import Gardening17 from "./assets/images/images-gardening/formal05.jpg";
import Gardening18 from "./assets/images/images-gardening/formal06.jpg";
import Gardening19 from "./assets/images/images-gardening/lakeside01.jpg";
import Gardening20 from "./assets/images/images-gardening/lakeside02.jpg";
import Gardening21 from "./assets/images/images-gardening/lakeside03.jpg";
import Gardening22 from "./assets/images/images-gardening/lakeside04.jpg";
import Gardening23 from "./assets/images/images-gardening/lakeside05.jpg";
import Gardening24 from "./assets/images/images-gardening/lakeside06.jpg";
import Gardening25 from "./assets/images/images-gardening/lakeside07.jpg";
import Gardening26 from "./assets/images/images-gardening/water00.jpg";
import Gardening27 from "./assets/images/images-gardening/water01.jpg";
import Gardening28 from "./assets/images/images-gardening/water02.jpg";
import Gardening29 from "./assets/images/images-gardening/water03.jpg";
import Gardening30 from "./assets/images/images-gardening/water04.jpg";
import Gardening31 from "./assets/images/images-gardening/water05.jpg";
import Gardening32 from "./assets/images/images-gardening/water06.jpg";
import Gardening33 from "./assets/images/images-gardening/water07.jpg";

const gardeningSources = [
  Gardening01,
  Gardening02,
  Gardening03,
  Gardening04,
  Gardening05,
  Gardening06,
  Gardening07,
  Gardening08,
  Gardening09,
  Gardening10,
  Gardening11,
  Gardening12,
  Gardening13,
  Gardening14,
  Gardening15,
  Gardening16,
  Gardening17,
  Gardening18,
  Gardening19,
  Gardening20,
  Gardening21,
  Gardening22,
  Gardening23,
  Gardening24,
  Gardening25,
  Gardening26,
  Gardening27,
  Gardening28,
  Gardening29,
  Gardening30,
  Gardening31,
  Gardening32,
  Gardening33,
];

const ProjectsGardening = () => {
  return (
    <div className="ProjectsGardening">
      <div className="ProjectsGardeningText text-profile">
        <h2>Gardening</h2>
        <p>scizors worked as a gardener circa 2003-2005</p>
      </div>
      <div className="gallery-wrapper">
        {gardeningSources.map((gardeningSource) => (
          <div className="image-wrapper">
            <img src={gardeningSource} />
          </div>
        ))}
      </div>
      <div>
        <p>
          Photos on this page by Erika Langley.{" "}
          <a href="http://www.erikalangley.com/">www.erikalangley.com</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectsGardening;
