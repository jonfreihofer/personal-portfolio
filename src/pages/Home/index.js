import { React, useState } from "react";
import LinkText from "../../components/LinkText";
import { FaEye, FaCode, FaClipboard } from "react-icons/fa";

export default function Home({ children }) {
  const [hovered, setHovered] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="landing__page">
        <header className={"name"}>Jonathan Freihofer</header>
        <br />
        <p className="subtitle">Front End Engineer</p>
        <main className="icon__container">
          <FaEye
            className="icon about"
            onMouseEnter={() => {
              setHovered(true);
              setTitle("About");
            }}
            onMouseLeave={() => setHovered(false)}
          />
          <FaCode
            className="icon project"
            onMouseEnter={() => {
              setHovered(true);
              setTitle("Recent Projects");
            }}
            onMouseLeave={() => setHovered(false)}
          />
          <FaClipboard
            className="icon resume"
            onMouseEnter={() => {
              setHovered(true);
              setTitle("Resume");
            }}
            onMouseLeave={() => setHovered(false)}
          />
        </main>
        <LinkText hovered={hovered}>
          <div className="titles">
            <p className="icon-title">{hovered && title}</p>
          </div>
        </LinkText>
      </div>
    </>
  );
}
