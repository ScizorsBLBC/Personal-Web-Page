import React, { useEffect, useState } from "react";

// import LinkIcon from "./assets/icons/link-icon.svg";
// import screenshot01 from "./assets/images/images-web-development/screenshot01.png";
 
const ProjectsWebDevelopment = () => {
    const [repos, setRepos] = useState([]);
    // fetch array and set to state

    useEffect(() => {
        fetch('https://api.github.com/users/scizorsblbc/repos')
            .then((response) => response.json())
            .then((resolvedJSON) => {
                setRepos(resolvedJSON);
                console.log(resolvedJSON);
            })
    }, []);
// Render
    return (
        <div className="ProjectsWebDevelopment">
            <div className="ProjectsWebDevelopmentText text-profile">
                <h2>
                    Web Development
                </h2>
                {repos.map((repo) =>{
                    return (
                        <div>
                            <h3>
                                <a target="_blank" href={repo.homepage || repo.html_url}>{repo.name}🔗</a>
                                {/* <LinkIcon/> */}
                            </h3>
                            <p>
                                {repo.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsWebDevelopment;

// api pull from github


// render array of objects from repository info as json (map method turn into jsx for react component)
// state variable that shows a load screen or something(maybe not needed)
//  styling via css

// https://api.github.com/users/scizorsblbc/repos

