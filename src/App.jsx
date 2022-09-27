import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

import Content from "./Content";
import NavBar from "./NavBar";
import GlobalStyled from "./GlobalStyled";

const App = (
  <Router>
    <div className="app-wrapper">
      <GlobalStyled />
      <NavBar />
      <Content />
    </div>
  </Router>
);
render(App, document.querySelector("#root"));
