import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <h3 className="content-card-title">Resume / Relevant Work Experience</h3>
      {/* CFC */}
      <div className="job">
        <div className="company-and-date">
          <h3>Coders For Causes</h3>
          <h3>June 2023-July 2023</h3>
        </div>

        <p className="position">Volunteer Developer</p>
        <ul className="duties">
          <li>
            Working with Community Spirit Foundation to develop 'Stride For
            Education' a progressive web app built with Vue, Vuetify, and
            Django.
          </li>
          <li>
            Led the development of the team dashboard page and login modal to
            enhance the user interface and experience.
          </li>
          <li>
            Developed and implemented comprehensive back-end tests to ensure
            software quality and functionality.
          </li>
          <li>
            Optimised web performance, resulting in an improved website
            performance score.
          </li>
        </ul>
      </div>

      {/* AR / A3D */}
      <div className="job">
        <div className="company-and-date">
          <h3>Coders For Causes</h3>
          <h3>June 2023-July 2023</h3>
        </div>

        <p className="position">Volunteer Developer</p>
        <ul className="duties">
          <li>
            Working with Community Spirit Foundation to develop 'Stride For
            Education' a progressive web app built with Vue, Vuetify, and
            Django.
          </li>
          <li>
            Led the development of the team dashboard page and login modal to
            enhance the user interface and experience.
          </li>
          <li>
            Developed and implemented comprehensive back-end tests to ensure
            software quality and functionality.
          </li>
          <li>
            Optimised web performance, resulting in an improved website
            performance score.
          </li>
        </ul>
      </div>


      <h3>Asset Reports</h3>
      <p>Jan 2021 - Present</p>
      <p>Head of Sales & Customer Support</p>
      <p>Head of Virtual Tours Department</p>
      <p>On-site Virtual Tours Operator</p>

      {/* push to bottom of page */}
      <button>Download PDF of my Resume</button>
    </div>
  );
}
