import { Link } from "react-router-dom";

export default function Navbar() {
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
              <Link to="contact" className="link-style">
                Contact
              </Link>
            </span>
          </li>
          {/* clicking on contact provides a modal with all contact details */}
        </ul>
      </nav>
    </div>
  );
}
