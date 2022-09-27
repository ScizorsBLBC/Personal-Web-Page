import React, { useState } from "react";
import { Link } from "react-router-dom";

import HomeIcon from "./assets/icons/home-icon.svg";
import ProjectsPhotographyIcon from "./assets/icons/projects-photography-icon.svg";
import ProjectsSilversmithIcon from "./assets/icons/projects-silversmith-icon.svg";
import ProjectsGardeningIcon from "./assets/icons/projects-gardening-icon.svg";
import ProjectsIcon from "./assets/icons/projects-icon.svg";
import AboutIcon from "./assets/icons/about-icon.svg";
import GithubIcon from "./assets/icons/github-icon.svg";
import NetworkingIcon from "./assets/icons/linktree-icon.svg";
import Avatar from "./assets/images/avatar.png";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <img src={Avatar} alt="Avatar" className="avatar" title="hi!"></img>
      <Link onClick={() => {}} to="/" title="home">
        <HomeIcon />
      </Link>

      <Link
        className="ProjectNavBar"
        to="/projects-photography"
        title="photography"
      >
        <ProjectsPhotographyIcon />
      </Link>

      <Link
        className="ProjectNavBar"
        to="/projects-silversmith"
        title="silversmithing"
      >
        <ProjectsSilversmithIcon />
      </Link>

      <Link
        className="ProjectNavBar"
        to="/projects-gardening"
        title="gardening"
      >
        <ProjectsGardeningIcon />
      </Link>

      <Link onClick={() => {}} to="/about" title="about me">
        <AboutIcon />
      </Link>

      <a
        onClick={() => {}}
        href="https://linktr.ee/scizors.eth"
        target="_blank"
        title="linktree"
      >
        <NetworkingIcon />
      </a>
    </div>
  );
};

export default NavBar;
