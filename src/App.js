/* eslint-disable no-restricted-globals */
import "./App.css";
import React from "react";
import Home from "../src/pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact patch="/">
            <Home />
          </Route>
          <Route path="/about"></Route>
          <Route path="/projects"></Route>
          <Route path="/resume"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
