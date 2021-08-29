/* eslint-disable no-restricted-globals */
import "./App.css";
import React from "react";
import Home from "../src/pages/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
