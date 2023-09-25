import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './nav_components/about_me_components/AboutMe';
import Resume from './nav_components/resume_components/Resume'; 

export default function Content() {
  return (
    <div className="content-container">
      <h2 className="content-header">(display content heading)</h2>
      <div className="content-card">
        <Routes>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          {/* You can add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}
