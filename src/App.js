/* eslint-disable no-restricted-globals */
import "./App.css";
import { useState } from "react";
import IconContainer from "../src/containers/IconContainer";
import { FaEye, FaCode, FaClipboard } from "react-icons/fa";

function App() {
  const [hovered, setHovered] = useState(false);
  const [linkTitle, setLinkTitle] = useState("Front End Engineer");
  const changeTitle = (title) => {
    setLinkTitle(title);
  };

  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">{linkTitle}</p>
        <IconContainer>
          <FaEye
            onMouseEnter={() => {
              changeTitle("About Me");
              setHovered(true);
            }}
            onMouseLeave={() => {
              changeTitle("Front End Engineer");
              setHovered(false);
            }}
          />
          <FaCode
            onMouseEnter={() => {
              changeTitle("Recent Projects");
              setHovered(true);
            }}
            onMouseLeave={() => {
              changeTitle("Front End Engineer");
              setHovered(false);
            }}
          />
          <FaClipboard
            onMouseEnter={() => {
              changeTitle("Current Resume");
              setHovered(true);
            }}
            onMouseLeave={() => {
              changeTitle("Front End Engineer");
              setHovered(false);
            }}
          />
        </IconContainer>
      </div>
    </>
  );
}

export default App;
