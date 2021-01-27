import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import HomeIcon from "./assets/icons/home-icon.svg";
import ProjectsPhotographyIcon from "./assets/icons/projects-photography-icon.svg";
import ProjectsSilversmithIcon from "./assets/icons/projects-silversmith-icon.svg";
import ProjectsWebDevelopmentIcon from "./assets/icons/projects-web-development-icon.svg";
import ProjectsGardeningIcon from "./assets/icons/projects-gardening-icon.svg";
import ProjectsIcon from "./assets/icons/projects-icon.svg";
import AboutIcon from "./assets/icons/about-icon.svg";
import GithubIcon from "./assets/icons/github-icon.svg"

const NavBar = (props) => {
    const [isProjectsShowing, setIsProjectsShowing] = useState(false);
    console.log(isProjectsShowing);
    return (
        <div className="NavBar">
            <Link onClick={() => {setIsProjectsShowing(false)}} to="/">
                <HomeIcon/>
            </Link>
            <Link onClick={() => {
                if (isProjectsShowing === true) {
                    setIsProjectsShowing(false);
                } else {
                    setIsProjectsShowing(true);
                }
                }} to="/projects">
                <ProjectsIcon/>
            </Link>

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-web-development" >
                        <ProjectsWebDevelopmentIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-photography" >
                        <ProjectsPhotographyIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-silversmith" >
                        <ProjectsSilversmithIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-gardening" >
                        <ProjectsGardeningIcon/>
                    </Link>
                : null }

            <Link onClick={() => {setIsProjectsShowing(false)}} to="/about">
                <AboutIcon/> 
            </Link>
            <a onClick={() => {setIsProjectsShowing(false)}} href="https://github.com/ScizorsBLBC" target="_blank">
                <GithubIcon/> 
            </a>
        </div>
    )
}

export default NavBar;

// hover text with names of icons when hovering over icons
