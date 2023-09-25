import React from "react";

export default function CardBody() {
  return (
    <div className="card-body">
      <h1 className="my-name">Aidan McDonald</h1>
      <h3 className="occupation">Web Developer</h3>
      {/* <p className='portfolio-link'>aidan-0.website_name</p> */}

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
            <img
              className="btn-logo-linkedin"
              src="./linkedin box.svg"
            />
            LinkedIn
          </button>
        </a>
      </div>

      <div className="body-text">
        <h2 className="about-me-header">About</h2>
        <p className="about-me-text">
          Skilled in both front-end frameworks such as React and Vue, and
          backend technologies including Python, C#, and SQL. Dedicated to
          creating complete end-to-end solutions that are both scalable and
          user-centric.
        </p>

        <h2 className="interests-header">Interests</h2>
        <p className="interests-text">
          When not coding, I enjoy exercising, swimming at the beach, cooking with my
          partner, and electronic music production.
        </p>
      </div>
    </div>
  );
}
