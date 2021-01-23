import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body {
        background:#0F070D;
        font-family: 'Ubuntu', sans-serif;
        min-height:100vh;
        color: #f0dbf0;
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
        box-sizing: border-box;
    }

    .NavBar svg path {
        fill: #f0dbf0;
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

    footer {
        border-top: 2px solid margin:60px 20px 20px 20px;
        border-top: .5px solid #ffe6f3;
    }
`;
export default GlobalStyled;