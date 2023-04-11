import React from "react";
import Card from "@mui/material/Card";

const VideoComponent = () => {
  return (
    <video width="50%" height="50%" autoPlay loop muted>
      <source
        src="https://f8n-ipfs-production.imgix.net/QmYU1P7Jeti6Ds84cB6umYUcybcbmHDcdmpvuTvbGV4kSd/nft.gif?q=70&h=1080&w=1080&fit=max&fm=mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};
const AirtableEmbedCultMembers = () => {
  return (
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrz6Gnw3a3jeV58n?backgroundColor=gray&layout=card"
      frameBorder="0"
      onWheel={() => {}}
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
  );
};

const AirtableEmbedDumpyBook = () => {
  return (
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrzrPkqFi1cXZVrx?backgroundColor=gray&layout=card"
      frameBorder="0"
      onWheel={() => {}}
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
  );
};

const AirtableEmbedCultApplication = () => {
  const embedUrl =
    "https://airtable.com/embed/shra7Vr0JFTMH36Fp?backgroundColor=gray";
  return (
    <iframe
      title="Airtable Form"
      className="airtable-embed"
      src={embedUrl}
      frameBorder="0"
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    />
  );
};

const Home = () => {
  return (
    <div className="Home background-profile">
      <div className="HomeText text-profile">
        <Card
          className="Airtable"
          elevation={24}
          style={{ backgroundColor: "transparent" }}
        >
          <h2>li'l dumpy cult welcomes thee</h2>
          <VideoComponent />
        </Card>
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h2>aspirants of the li'l dumpy cult congregation</h2>
          <p>click to expand</p>
          <AirtableEmbedCultMembers />
        </Card>

        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h2>selected verses from the revered Book of Dumpy</h2>
          <p>click to expand</p>
          <AirtableEmbedDumpyBook />
        </Card>
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h2>beseech entrance to li'l dumpy's fold</h2>
          <p>
            all seekers, must call 801-960-2878, endure 3 minutes of barking,
            and reveal unto us the manner of li'l dumpy's dream manifestations.
            line open 24/7. can't call? reach out to scizors.eth@gmail.com
          </p>
          <AirtableEmbedCultApplication />)
        </Card>
        {/* <h1>scizors</h1>
          <h3>photography</h3>
          <h3>machine learning</h3>
          <h3>artificial intelligence</h3>
          <h3>code based generative art</h3>
          <h3>digital painting</h3> */}
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
