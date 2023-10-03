import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './nav_components/about_me_components/AboutMe';
import Resume from './nav_components/resume_components/Resume'; 
import Projects from './nav_components/projects_components/Projects'
import Contact from './nav_components/contact_components/Contact'

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-card">
        <Routes>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
