import React from "react";
import Card from "@mui/material/Card";

const About = () => {
  return (
    <div className="About background-profile">
      <div className="AboutText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
          <p>
            scizors (they/them) is a genderqueer multidisciplinary artist who
            began selling nft art after 29 years of compulsively creating and
            documenting the world through an often distorted lens. their
            artistic journey began at the age of 14 with b&w film photography.
            it has evolved to include abstract & traditional digital
            photography, code-based generative art, video, machine learning \
            artificial intelligence, AI animation, & digital painting
          </p>
          <p>
            scizors brings their imagination to life using traditional tools
            such as Adobe Photoshop & Lightroom, Bazaart, Procreate, Logic Pro,
            & Davinci Resolve; in addition to often experimental no code
            artificial intelligence \ machine learning tools from Midjourney,
            Dall-E, Stable Diffusion, Topaz Labs, RunwayML, & more
          </p>
          <p>
            scizors has had their artwork exhibited at Art Basel Miami 2022,
            imnotArt Gallery Chicago, 50mm Collective Meta Masquerade 2022, NFT
            Paris 2023, NFT Korea 2023 in Seoul, Superchief Gallery NYC Oculus
            Gallery, and was a featured artist at NFT NYC 2023
          </p>
          <p>
            icons used on this site were created by Priyanka, Eucalyp, Jemis
            Mali, Hadi, Iconixar, Iconcheese, Caio Nery Filho, Yamini Ahluwalia,
            Rivda, ProSymbols, Petrine Cross, & Kimmi Studio from the Noun
            Project{" "}
          </p>
          <p>
            <a href="https://thenounproject.com/"> www.thenounproject.com</a>
          </p>
          <p>Linktree icon from World Vector Logo </p>
          <p>
            <a href="https://worldvectorlogo.com/logo/linktree-2">
              {" "}
              www.worldvectorlogo.com
            </a>
          </p>
          <p>
            ©2022 by scizors licensed cc0 1.0 universal. to the extent possible
            under law scizors has waived all copyright and related or
            neighboring rights. this work is published from: United States
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
