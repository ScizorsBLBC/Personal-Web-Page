import React from "react";

const silversmithSources = [
   
]
const ProjectsSilversmith = () => {
    return (
        <div className="ProjectsSilversmith">
            <h1>
                Silversmith
            </h1>
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

// add images