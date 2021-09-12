/* eslint-disable no-restricted-globals */
import "./App.css";
import React from "react";
import About from "../src/pages/About";
import Home from "../src/pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects"></Route>
          <Route path="/resume"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
