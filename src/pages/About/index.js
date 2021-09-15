import React from "react";

export default function About({ children }) {
  return (
    <>
      <header className="about-container">
        <h1 className="name">Hey </h1>
        <article className="unstyled-text about">
          <p>
            My name is Jonathan Freihofer. I build dynamic and interactive web
            applications with a strong focus on the client side.
          </p>
          <p>
            I'm a problem solver, expert learner, teacher, self starter,
            motivator, and motivatee. Perhaps best of all, I'm also a pretty
            nice guy.
          </p>
          <a
            href="Resume(1).pdf"
            className="resume"
            style={{
              textDecoration: "none",
              color: "white",
              border: "solid 2px white",
              padding: "5px 10px",
              borderRadius: "15px",
              fontWeight: "bolder",
            }}
          >
            <span>Resume</span>
          </a>
        </article>
      </header>
      <main className="tools-section">
        <section className="unstyled-text tools ">
          <h3 className="name subtitle">I Speak:</h3>
          <ul className="unstyled-text list">
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>TypeScript</li>
          </ul>
        </section>
        <section className="unstyled-text tools">
          <h3 className="name subtitle"> I Use:</h3>
          <ul className="unstyled-text list">
            <li>React</li>
            <li>StyledComponents</li>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li>Terminal</li>
            <li>Git</li>
            <li>Github</li>
            <li>Next.js</li>
            <li>RESTful API's</li>
            <li>Jasmine</li>
            <li>Jotai</li>
          </ul>
        </section>
      </main>
    </>
  );
}
