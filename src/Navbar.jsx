import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <nav className="scrolling-nav">
      <ul className="nav-list" id="nav-list" data-mouse-down-at="0">
      <li>
          <Link to="aboutme" className="link-style">
            About Me
          </Link>
        </li>
        <li>
          <Link to="resume" className="link-style">
            Resume
          </Link>
        </li>
        <li>
          <Link to="projects" className="link-style">
            Projects
          </Link>
        </li>
        {/* when clicking on projects, make the nav bar show the full list of projects and have it scrollable like the nav */}
        <li>
          <Link to="contact" className="link-style">
            Contact
          </Link>
        </li>
        {/* clicking on contact provides a modal with all contact details */}
      </ul>
    </nav>
  );
}