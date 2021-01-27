import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { Helmet } from "react-helmet";

import Content from "./Content";
import NavBar from "./NavBar";
import GlobalStyled from "./GlobalStyled";
import Favicon from "./assets/favicon-32x32.png";


const App = (
    <Router>
        <div className="app-wrapper">
            <Helmet>
                <link rel="icon" type="image/png" href={Favicon} />
            </Helmet>
            <GlobalStyled/>
            <NavBar/>
            <Content/>
        </div>
    </Router>

)
render(App, document.querySelector("#root"));

// import { Favicon } from "react-favicon";