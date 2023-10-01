import React from "react";
import "./Resume.css";
import WorkExperience from "./Work Experience";
import { Icon } from '@iconify/react';

export default function Resume() {
  return (
    <div>
      <WorkExperience />
      {/* conditionally render SkillsAchiements  buttons to toggle  < and > outside of content container*/}
      <Icon className="icon icon-prev" icon="grommet-icons:next" rotate={2} />
      <Icon className="icon icon-next" icon="grommet-icons:next" />
      {/* push to bottom of page */}
      <button className="resume-btn">Download PDF of my Resume</button>
    </div>
  );
}
