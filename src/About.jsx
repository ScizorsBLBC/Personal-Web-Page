import React from "react";
import Card from "@mui/material/Card";


const VideoComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '10%', paddingBottom: '10%' }}>
      <div style={{ position: 'relative', width: '41.66%', paddingBottom: '75%' }}> {/* Adjusted paddingBottom for portrait mode */}
        <iframe
          src="https://www.youtube.com/embed/Rk4LECf5Nj4"
          title="YouTube video player"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// const VideoComponent = () => {
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '100%',
//       height: '100%',
//       paddingTop: '10%', // Add padding to the top of the container
//       paddingBottom: '10%', // Add padding to the bottom of the container
//     }}>
//       <iframe
//         src="https://www.youtube.com/embed/Rk4LECf5Nj4"
//         title="YouTube video player"
//         style={{ width: '80%', height: '80%' }} // Make the iframe smaller
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// const VideoComponent = () => {
//   return (
//     <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
//       <iframe
//         src="https://www.youtube.com/embed/Rk4LECf5Nj4"
//         title="YouTube video player"
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '100%',
//           height: '100%' 
//         }}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// const VideoComponent = () => {
//   return (
//     <div style={{ 
//       position: 'relative',
//       width: '100%',
//       height: '100%',
//       // paddingBottom: '28.125%' 
//     }}>
//       <iframe 
//         src="https://www.youtube.com/embed/Rk4LECf5Nj4"
//         title="YouTube video player"
//         style={{
//           position: 'absolute',
//           top: 0, 
//           left: 0, 
//           width: '100%', 
//           height: '100%' }}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };



const About = () => {
  return (
    <div className="About background-profile">
      <div className="AboutText text-profile">
        <Card elevation={24} style={{ backgroundColor: "transparent" }}>
        <p>
           scizors (they/them) is a genderqueer multidisciplinary artist who
           began selling art on NFT smart contracts after 29 years of
           compulsively creating and documenting the world through an often
           distorted lens. their artistic journey started at the age of 14 with
           B&W film photography. it has evolved to include abstract &
           traditional digital photography, code-based generative art, video,
           machine learning \ artificial intelligence, digital painting, AI
           animation, & digital fashion
         </p>
         <p>
           scizors brings their imagination to life using traditional tools
           such as Adobe Photoshop & Lightroom, Bazaart, Procreate, Photomosh,
           Logic Pro, & Davinci Resolve
         </p>
         <p>
           scizors uses artificial intelligence \ machine learning tools from
           Midjourney, Dall-E, Stable Diffusion, Deforum, Topaz Labs, RunwayML,
           & more
         </p>
         <p>
           shown in Art Basel Miami, Paris, Chicago, Seoul, NYC, LA, Rome,
           Lisbon, Reno, Tokyo, Eindhoven, Bali, & the MetaCannes Film Festival
         </p>
         <p>
          sending hella special shout outs to Claire Silver, the teams at Superchief Gallery, A2 Accelerate Art, 50mm Collective, Forbidden Fruit, imnotArt Gallery, Nox Gallery, Superlative Gallery, and the MetaCannes Film Festival for putting my art in front of a worldwide audience...
          </p>
          <p>
          even a Times Square digital billboard, thanks for that surprise Ed Zipco (!!!)
          </p>
          <VideoComponent />
          <p>
          <a href="https://filmsquad.io/let-me-bang-papier-mache/">| MetaCannes Bio: let me bang, papier-mâché |</a>
          </p>
          <p>
          <a href="https://gallery.manifold.xyz/0x6ff0de115037a5f36286bb3a19808cf141ff7aed/312">| watch let me bang, papier-mâché here |</a>
          </p>
          <p>
          <a href="https://filmsquad.io/cant-stop-us-now/">| MetaCannes Bio: can't stop us now |</a>
          </p>
          <p>
          <a href="https://foundation.app/mint/eth/0x6Ff0De115037a5f36286Bb3a19808Cf141fF7Aed/328">| watch can't stop us now here |</a>
         </p>
         <p>all scizors' art is cc0</p>
         <p>
            icons used on this site were created by Priyanka, Eucalyp, Jemis
            Mali, Hadi, Iconixar, Iconcheese, Caio Nery Filho, Yamini Ahluwalia,
            Rivda, ProSymbols, & Kimmi Studio from the Noun Project{" "}
          </p>
          <p>
            <a href="https://filmsquad.io/let-me-bang-papier-mache/"> www.thenounproject.com</a>
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
