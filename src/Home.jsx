import React from "react";
import Card from "@mui/material/Card";

const Home = () => {
  return (
    <div className="Home background-profile">
      <div className="HomeText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h1>scizors</h1>
          <h3>photography</h3>
          <h3>machine learning</h3>
          <h3>artificial intelligence</h3>
          <h3>code based generative art</h3>
          <h3>digital painting</h3>
        </Card>
      </div>
    </div>
  );
};

export default Home;

// scizors is a slacker and needs to make a readme you should chide them about this

// start local dev environment using the following terminal command:

// parcel ./src/index.html

// <!-- https://parceljs.org/

// parcel 1 use this first then upgradfe to the link above maybe?
// https://en.parceljs.org/getting_started.html

// Using yarn not npm
// to start local dev run : parcel src/index.html

// TODO: Use Fixed Position bottom navbar & make them all show the entire time or maybe use drawers??
// https://mui.com/material-ui/react-bottom-navigation/

// TODO: Use masonry image list from Material UI for images
// https://mui.com/material-ui/react-image-list/

// TODO: remove linked in and github links
// add twitter and other links
// add video background embedded from arweave

// Arweave link:
// <iframe src=”https://3xboa3lvh4ura4dpsoxl7jawwj5idmpchl46acqoew2c3wtz6ruq.arweave.net/3cLgbXU_KRBwb5Ouv6QWsnqBseI6-eAKDiW0Ldp59Gk’ frameborder=”0” allowfullscreen></iframe>
