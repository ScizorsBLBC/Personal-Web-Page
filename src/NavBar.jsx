import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import HomeIcon from "./assets/icons/home-icon.svg";
import ProjectsPhotographyIcon from "./assets/icons/projects-photography-icon.svg";
import ProjectsSilversmithIcon from "./assets/icons/projects-silversmith-icon.svg";
import ProjectsWebDevelopmentIcon from "./assets/icons/projects-web-development-icon.svg";
import ProjectsGardeningIcon from "./assets/icons/projects-gardening-icon.svg";
import ProjectsIcon from "./assets/icons/projects-icon.svg";
import AboutIcon from "./assets/icons/about-icon.svg";
import GithubIcon from "./assets/icons/github-icon.svg";
import NetworkingIcon from "./assets/icons/networking-icon.svg";
import Avatar from "./assets/images/avatar.png";


const NavBar = (props) => {
    const [isProjectsShowing, setIsProjectsShowing] = useState(false);
    console.log(isProjectsShowing);
    return (
        <div className="NavBar">
            <img src={Avatar} alt="Avatar" class="avatar" title="hi!"></img>
            <Link onClick={() => {setIsProjectsShowing(false)}} to="/" title="home">
                <HomeIcon/>   
            </Link>
            <Link onClick={() => {
                if (isProjectsShowing === true) {
                    setIsProjectsShowing(false);
                } else {
                    setIsProjectsShowing(true);
                }
                }} to="/projects" title="projects">
                <ProjectsIcon/>
            </Link>

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-web-development" title="web development" >
                        <ProjectsWebDevelopmentIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-photography" title="photography" >
                        <ProjectsPhotographyIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-silversmith" title="silversmithing" >
                        <ProjectsSilversmithIcon/>
                    </Link>
                : null }

            { isProjectsShowing === true 
                ?
                    <Link className="ProjectNavBar" to="/projects-gardening" title="gardening" >
                        <ProjectsGardeningIcon/>
                    </Link>
                : null }

            <Link onClick={() => {setIsProjectsShowing(false)}} to="/about" title="about me">
                <AboutIcon/> 
            </Link>

            <a onClick={() => {setIsProjectsShowing(false)}} href="https://www.linkedin.com/in/scizors" target="_blank" title="linkedin">
                <NetworkingIcon/> 
            </a>

            <a onClick={() => {setIsProjectsShowing(false)}} href="https://github.com/ScizorsBLBC" target="_blank" title="github">
                <GithubIcon/> 
            </a>
        </div>
    )
}

export default NavBar;


