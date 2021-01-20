import React from "react"
import { BioBlock } from "./BioBlock";
import Projects from "./Projects";
import ProjectsPhotography from "./ProjectsPhotography";
import ProjectsSilversmith from "./ProjectsSilversmith";
import ProjectsWebDevelopment from "./ProjectsWebDevelopment";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
const Content = () => {
    return (
            <div className="Content">
               <Route exact path="/">
                    <BioBlock/>
               </Route>
               <Route exact path="/projects">
                    <Projects/>
               </Route>
               <Route exact path="/about">
                   <About/>
               </Route>
               <Route exact path="/home">
                   <Home/>
               </Route>
               <Route exact path="/projects/photography">
                   <ProjectsPhotography/>
               </Route>
               <Route exact path="/projects/silversmith">
                   <ProjectsSilversmith/>
               </Route>
               <Route exact path="/projects/web-development">
                   <ProjectsWebDevelopment/>
               </Route>
                <footer>
                    <p>
                        sorry mom
                    </p>
                </footer>
            </div>
    
    )
}

export default Content;
