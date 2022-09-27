import React from "react";
import Card from "@mui/material/Card";

const Projects = () => {
  return (
    <div className="Projects background-profile">
      <div className="ProjectsText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h1>portfolio</h1>
          <h3>select an icon on the left</h3>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
