import React, { Fragment } from "react";
import { render } from "react-dom";
import Content from "./Content";
import styled, { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body {
        background: #0d0d0d;
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
        background: black; 
        overflow-x: hidden;    
        padding: 10px;
    } 

    footer {
        border-top: 2px solid margin:60px 20px 20px 20px;
        border-top: .5px solid #ffe6f3;
    }
`;

const App = (
    <Router>
        <div className="app-wrapper">
            <GlobalStyle/>
            <NavBar/>
            <Content/>
           
        </div>
    </Router>

)
render(App, document.querySelector("#root"));