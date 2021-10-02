import React from "react";
import { StyledImage, ImageWrapper } from "../../components/Image/styles.js";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        <h1>Recent Projects I've Worked On</h1>
        <ImageWrapper>
          <div className="project">
            <h3>Contacts Manager</h3>
            <StyledImage src="./screenshot-of-contacts.png" alt="boh" />
          </div>
          <div className="project">
            <h3>Snthrgy Browser Synth</h3>
            <StyledImage src="./screenshot-of-synth.png" alt="boh" />
          </div>
          <div className="project">
            <h3>Hyper Todo</h3>
            <StyledImage src="./screenshot-of-todo.png" alt="boh" />
          </div>
        </ImageWrapper>
      </div>
    </>
  );
}
