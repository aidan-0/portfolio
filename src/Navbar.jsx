import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./nav_components/contact_components/Contact";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  function handleContactClick() {
    console.log("contact clicked");
    setShowModal(!showModal);
  }

  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className="nav-list">
          <li className="li--aboutme">
            <span className="link-wrapper wrapper--aboutme">
              <Link to="aboutme" className="link-style">
                About Me
              </Link>
            </span>
          </li>
          <li className="li--resume">
            <span className="link-wrapper wrapper--resume">
              <Link to="resume" className="link-style">
                Resume
              </Link>
            </span>
          </li>
          <li className="li--projects">
            <span className="link-wrapper wrapper--projects">
              <Link to="projects" className="link-style">
                Projects
              </Link>
            </span>
          </li>
          <li className="li--contact">
            <span className="link-wrapper wrapper--contact">
              <button
                className="link-style contact-modal-btn"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </span>
          </li>
        </ul>
      </nav>
      {showModal && (<Contact onClose={() => setShowModal(false)} />)}
    </div>
  );
}