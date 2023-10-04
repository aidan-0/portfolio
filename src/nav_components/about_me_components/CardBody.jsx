import React from "react";

export default function CardBody() {
  return (
    <div className="card-body">
      <h1 className="my-name">Aidan McDonald</h1>
      <h3 className="occupation">Web Developer</h3>

      <div className="btn-div">
        <a className="email-btn-link" href="mailto:am.mcdonald00@gmail.com">
          <button className="email-btn">
            <img className="btn-logo-email" src="./mail.svg" />
            Email
          </button>
        </a>
        <a
          className="linkedin-btn-link"
          href="https://www.linkedin.com/in/aidan-mcdonald0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="linkedin-btn">
            <img className="btn-logo-linkedin" src="./linkedin box.svg" />
            LinkedIn
          </button>
        </a>
      </div>

      <div className="body-text">
        <h2 className="about-me-header">About</h2>
        <p className="about-me-text">
          Hi, I'm <span className="fancy">Aidan McDonald</span>
          <span className="font-weight-300">!</span> Welcome to my portfolio,
          where art meets code. As a passionate front-end developer, I've
          dedicated myself to creating applications that don't just work
          seamlessly but also captivate the eye. Equipped with a strong
          knowledge of React, Vue, and C#, I endeavor to merge form with
          function, ensuring the user not only finds what they're looking for
          but enjoys the journey along the way.
          <br />
          <br />
          However, my journey doesn't end at the user interface. I'm diving deep
          into the realm of back-end development, expanding my horizons and
          solidifying my skillset from end to end. The world of coding is vast,
          and I am relentlessly pursuing knowledge, ensuring I remain at the
          cutting edge of development.
        </p>
      </div>
    </div>
  );
}
