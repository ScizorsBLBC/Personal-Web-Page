import styled, { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CssBaseline from "@material-ui/core/CssBaseline";

const backgroundBlack = "transparent"; //"#0F070D"
const textWidth = "60%";
const textWidthMobile = "100%";
const textColor = "#f4ecfa";

const GlobalStyled = createGlobalStyle`
    body {
        background-image: url("${require("./assets/images/background.png")}");
        font-family: 'Roboto', sans-serif;
        min-height:100vh;
        color: ${textColor};
        line-height: 1.666em;
        background-size: cover;
    }

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .container {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

    * {
        box-sizing: border-box;
    }

    .text-profile {
        margin: auto;
        max-width: ${textWidth};
        text-align: center;
        /** Smooth transition to the bottom from a greyish to a less greyish color **/
        background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));
        /** A blur effect behind the form **/
        backdrop-filter: blur(10px);
        /** Thick box shadow with a greyish background on the right, bottom, with a blurred shadow **/
        box-shadow: 10px 10px 10px rgba(30,30,30,0.5);
    }



@media(max-width: 700px) {
    .background-profile {
        background: "transparent";
        }

    .text-profile {
        max-width: ${textWidthMobile};
    }
}

    .HomeText {
        letter-spacing: .1666rem;
}

    .app-wrapper {
        background: "transparent";
        position: absolute;
        top: 0;
        min-width: 100%;
    }

    a {
        color: ${textColor};
        text-decoration: none;
    }

    h1 {
        margin-top: 20;
    }

    .Content {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        ${"" /* width: calc(100vw - 95px); */}
        min-width: calc(100vw - 95px);
        min-height: 80vh;
        background: "transparent";
    }

    .NavBar svg path {
        fill: #E3C5E3;
    }

    .NavBar svg {
        height: 65px;
        width: 65px;
    }

    .NavBar {
        justify-content: space-evenly;
        align-items: top;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: top;
        height: 100%;
        z-index: 1;
        overflow-x: hidden;
        padding: 10px;
        /** Smooth transition to the bottom from a greyish to a less greyish color **/
        background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));
        /** A blur effect behind the form **/
        backdrop-filter: blur(10px);
        /** Thick box shadow with a greyish background on the right, bottom, with a blurred shadow **/
        box-shadow: 10px 10px 10px rgba(30,30,30,0.5);
    }

    img {
        border-radius: 2%;
    }

    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .gallery-wrapper {
        background: ${backgroundBlack};
        margin-top: 0px;
        display: flex;
        flex-wrap: wrap;
        }

    div.image-wrapper {
        width: 50%;
        overflow: hidden;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        @media (min-width: 2000px) {
            width: 25%;
        }
        @media screen and (max-width: 45em) {
            width: 100%;
            height: 200px;
        }

    }
    .image-wrapper > img {
        max-height: 100%;
        max-width: 100%;
    }

    footer {
        text-align: center;
        border-top: 2px solid margin:60px 20px 20px 20px;
        border-top: .5px solid  #E3C5E3;
    }
`;

export default GlobalStyled;
