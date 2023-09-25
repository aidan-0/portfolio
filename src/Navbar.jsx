import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="scrolling-nav">
      <ul>
        <li><Link to="aboutme">About Me</Link></li>
        <li><Link to="resume">Resume</Link></li>
      </ul>
    </nav>
  );
}
