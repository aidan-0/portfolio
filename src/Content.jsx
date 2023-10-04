import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./nav_components/about_me_components/AboutMe";
import Resume from "./nav_components/resume_components/Resume";
import Projects from "./nav_components/projects_components/Projects";

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-card">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}
