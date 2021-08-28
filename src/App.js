/* eslint-disable no-restricted-globals */
import "./App.css";
import { useState } from "react";
import { Icon } from "../src/components/Icon";
import IconContainer from "../src/containers/IconContainer";
import { FaEye, FaCode, FaClipboard } from "react-icons/fa";

function App() {
  const [hovered, setHovered] = useState(false);
  const [linkTitle, setLinkTitle] = useState("Front End Engineer");
  const changeTitle = (title) => {
    switch (title) {
      case "about":
        hovered && setLinkTitle("About Me");
        break;
      case "projects":
        hovered && setLinkTitle("Recent Work");
        break;
      case "resume":
        hovered && setLinkTitle("Resume");
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">{linkTitle}</p>
        <IconContainer>
          <Icon
            id={"about"}
            onMouseEnter={() => {
              setHovered(true);
              console.log(Icon.id);
            }}
            onMouseLeave={() => setHovered(false)}
          >
            <FaEye />
          </Icon>

          <FaCode
            onMouseEnter={() => {
              setHovered(true);
              changeTitle(FaCode.id);
            }}
            onMouseLeave={() => setHovered(false)}
            id={"projects"}
          />
          <FaClipboard
            onMouseEnter={() => {
              setHovered(true);
              changeTitle(FaClipboard.id);
            }}
            onMouseLeave={() => setHovered(false)}
            id={"resume"}
          />
        </IconContainer>
      </div>
    </>
  );
}

export default App;
