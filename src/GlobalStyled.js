import styled, { createGlobalStyle } from "styled-components";

const backgroundBlack = "#010101";  //"#0F070D"
const textWidth = "35%";

const GlobalStyled = createGlobalStyle`
    body {
        background: ${backgroundBlack};
        font-family: 'Ubuntu', sans-serif;
        min-height:100vh;
        color: #E3C5E3;
        line-height: 1.5em;
    }

    * {
        box-sizing: border-box; 
    }

    .app-wrapper {
        position: absolute;
        top: 0;
    }

    h1 {
        margin-top: 0;
    }

    .Content {
        margin-left: 95px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        width: calc(100vw - 95px);
        min-width: calc(100vw - 95px);
        min-height: 100vh;
        background: ${backgroundBlack};
    }

    .NavBar svg path {
        fill: #E3C5E3;
    }

    .NavBar svg {
        height: 65px;
        width: 65px;
    }

    .NavBar {
        align-items: center;
        display: flex;
        flex-direction: column;
        position: fixed;     
        height: 100%;
        width: 75px;     
        z-index: 1;           
        background: #030002; 
        overflow-x: hidden;    
        padding: 10px;
    } 

    .ProjectNavBar{
        padding-left: 20px;
    }

    .ProjectNavBar svg {
        height: 50px;
        width: 50px;
        
    }

    .Home {
        background-image: url("${require('./assets/images/headshot.jpg')}");
        background-color: rgba(0,0,0,.3); 
        background-size: cover;
        background-repeat: no-repeat;
        flex-grow: 1;
        background-position: 20%;
        background-blend-mode: luminosity;
    }

    .HomeText {
        max-width: ${textWidth};
    }

    .About {
        background-image: url("${require('./assets/images/headshot.jpg')}");
        background-color: rgba(0,0,0,.3); 
        background-size: cover;
        background-repeat: no-repeat;
        flex-grow: 1;
        background-position: 20%;
        background-blend-mode: luminosity;
    }

    .Projects {
        background-image: url("${require('./assets/images/headshot.jpg')}");
        background-color: rgba(0,0,0,.3); 
        background-size: cover;
        background-repeat: no-repeat;
        flex-grow: 1;
        background-position: 20%;
        background-blend-mode: luminosity;
    }

    .AboutText, .ProjectsText, .ProjectsSilversmithText, .ProjectsGardeningText, .ProjectsPhotographyText, .ProjectsWebDevelopmentText{
        max-width: ${textWidth};
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
        border-top: 2px solid margin:60px 20px 20px 20px;
        border-top: .5px solid  #E3C5E3;
    }
`;
export default GlobalStyled;