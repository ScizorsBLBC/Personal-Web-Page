import React from "react";

import Projects01 from "./assets/images/project-icons.png";

const projectsSources = [
    Projects01
]

const Projects = () => {
    return (
        <div className="Projects">
            <h1>
                Projects
            </h1>
            <p>
                Select one of the icons on the left to view my Web Development, Photography, Silversmithing, and Gardening portfolios. 
            </p>
        </div>
    )
}

export default Projects;

//   <div className="gallery-wrapper">
// {projectsSources.map((projectsSource) => (
//    <div className="image-wrapper"> 
//        <img src={projectsSource} />
//    </div>
// ))}
// </div> 