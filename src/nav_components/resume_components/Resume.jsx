import React from "react";
import "./Resume.css";
import WorkExperience from "./Work Experience";
import SkillsAchievements from "./SkillsAchievements";
import { Icon } from "@iconify/react";

export default function Resume() {
  const [displayWorkExperience, setDisplayWorkExperience] =
    React.useState(true);

  function handleClick() {
    setDisplayWorkExperience(!displayWorkExperience);
  }

  return (
    <div>
      {displayWorkExperience ? <WorkExperience /> : <SkillsAchievements />}
      <Icon
        className="icon icon-prev"
        icon="grommet-icons:next"
        rotate={2}
        onClick={handleClick}
      />
      <Icon
        className="icon icon-next"
        icon="grommet-icons:next"
        onClick={handleClick}
      />
      <button className="resume-btn">Download PDF of my Resume</button>
      {/* Add download functionality */}
    </div>
  );
}
