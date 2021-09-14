import React from "react";

export default function About({ children }) {
  return (
    <>
      <header className="about-container">
        <h1>Hey </h1>
        <article className="unstyled-text about">
          <p>
            My name is Jonathan Freihofer. I build dynamic and interactive front
            end web applications.
          </p>
          <p>
            I'm a problem solver, expert learner, teacher, self starter,
            motivator, and motivatee.
          </p>
        </article>
      </header>
      <main className="tools-section">
        <section className="unstyled-text tools">
          <h3>I Speak</h3>
        </section>
        <section className="unstyled-text tools">
          <h3> I Use</h3>
        </section>
      </main>
    </>
  );
}
