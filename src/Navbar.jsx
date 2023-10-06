import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./nav_components/contact_components/Contact";
import { Icon } from '@iconify/react';


export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContactClick() {
    console.log("contact clicked");
    setShowModal(!showModal);
  }

  function handleMenuClick() {
    console.log("menu clicked");
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-title">
          <h1>Aidan McDonald</h1>
        </div>
        <div className="hamburger" onClick={handleMenuClick}>
        <Icon icon="line-md:menu" />
        </div>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="li--aboutme" onClick={handleMenuClick}>
            <span className="link-wrapper wrapper--aboutme">
              <Link to="aboutme" className="link-style">
                About Me
              </Link>
            </span>
          </li>
          <li className="li--resume" onClick={handleMenuClick}>
            <span className="link-wrapper wrapper--resume">
              <Link to="resume" className="link-style">
                Resume
              </Link>
            </span>
          </li>
          <li className="li--projects" onClick={handleMenuClick}>
            <span className="link-wrapper wrapper--projects">
              <Link to="projects" className="link-style">
                Projects
              </Link>
            </span>
          </li>
          <li className="li--contact" onClick={handleMenuClick}>
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
      {showModal && <Contact onClose={() => setShowModal(false)} />}
    </div>
  );
}
