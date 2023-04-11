import { Card } from "@material-ui/core";
import React from "react";

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

export const LilDumpyCult = (props) => {
  console.log(props);
  return (
    <div className="Home background-profile">
      <div className="HomeText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <h2>li'l dumpy cult welcomes thee</h2>
          <VideoComponent />

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
          <Card>
            <h2>beseech entrance to li'l dumpy's fold</h2>
            <p>
              all seekers, must call 801-960-2878, endure 3 minutes of barking,
              and reveal unto us the manner of li'l dumpy's dream
              manifestations. line open 24/7. can't call? reach out to
              scizors.eth@gmail.com
            </p>
            <AirtableEmbedCultApplication />)
          </Card>
        </Card>
      </div>
    </div>
  );
};
