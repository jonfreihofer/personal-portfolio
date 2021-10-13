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
            <a href="https://contacts-manager-dusky.vercel.app/">
              <StyledImage
                src="./screenshot-of-contacts.png"
                alt="image of project"
              />
            </a>
            <p>
              A CRUD-dy faux contact manager with calm, soothing, fluid UI
              features.
            </p>
            <a href="https://github.com/jonfreihofer/contacts-app-main">Code</a>
          </div>
          <div className="project">
            <h3>Snthrgy Browser Synth</h3>
            <a href="https://snthergy.github.io/snthrgy/">
              <StyledImage
                src="./screenshot-of-synth.png"
                alt="image of project"
              />
            </a>
            <p>
              A musical synthesizer in a browser? Yes please! An ongoing project
              started by a friend of mine who is also a musician. Eventually
              will be fully working musical instrument, built with JavaScript!
            </p>
            <a href="https://github.com/snthergy/snthrgy">Code</a>
          </div>
          <div className="project">
            <h3>Hyper Todo</h3>
            <a href="https://hyper-todo.vercel.app/">
              <StyledImage
                src="./screenshot-of-todo.png"
                alt="image of project"
              />
            </a>
            <p>The dreaded to-do list, but bonafide!</p>
            <a href="https://github.com/jonfreihofer/to-do">Code</a>
          </div>
        </ImageWrapper>
      </div>
    </>
  );
}
