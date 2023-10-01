import React from "react";

export default function SkillsAchievements() {
  return (
    <div>
      {/* link this and add the skills / achievements section. add an arrow to click to go to skills and achievements */}
      <h3 className="content-card-title">Skills & Achievements</h3>
      {/* CFC */}
      <div className="skills">
        {/* Key Achievements */}
        <h3 className="position achievements-header">Key Achievements</h3>
        <ul className="duties">
          <li>
            Achieved a threefold increase in website traffic for the Asset
            Reports website via implementation of free downloadable guides and
            templates for potential clients.
          </li>
          <li>
            Doubled revenue through the strategic implementation of 3rd party
            advertising on Reports Online by incorporating banner ads, EDMs, and
            impactful company events.
          </li>
          <li>
            Implemented quality control measures to reduce customer complaints
            by 90% for Floorplans, ultimately increasing customer retention.
          </li>
          <li>
            Oversaw the development of{" "}
            <span className="website-link">
              <a
                href="https://assetmaps.com.au/#/Swan-Christian-College"
                target="_blank"
                rel="noreferrer noopener"
              >
                Asset Maps
              </a>
            </span>
            , a proprietary software which aims to make large format assets more
            accessible and visibly engaging to our customers clientele.
          </li>
          <li>
            Successfully project managed the Asset 3D reseller business, leading
            to a growth in sales.
          </li>
          <li>
            Executed the development of professional websites for{" "}
            <span className="website-link">
              <a
                href="https://www.asset3d.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Asset 3D
              </a>
            </span>
            ,{" "}
            <span className="website-link">
              <a
                href="https://www.houselandmaps.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                House Land Maps
              </a>
            </span>
            , and{" "}
            <span className="website-link">
              <a
                href="https://www.reportsonline.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Reports Online
              </a>
            </span>
            . Contributing to enhanced digital presence and client engagement.
          </li>
        </ul>

        {/* Skills */}
        <h3 className="position skills-header">Skills</h3>
        <ul className="duties">
          <li>
            Exceptional interpersonal skills with a high level of attention to
            detail.
          </li>
          <li>
            Strong adaptability and resilience in high-pressure, fast-paced
            environments.
          </li>
          <li>
            Proven ability to deliver high-quality work within strict
            timeframes.
          </li>
          <li>
            Collaborative team player with the ability to develop and deliver
            ideas effectively.
          </li>
          <li>
            Successfully project managed the Asset 3D reseller business, leading
            to a growth in sales.
          </li>
          <li>
            Executed the development of professional websites for{" "}
            <span className="website-link">
              <a
                href="https://www.asset3d.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Asset 3D
              </a>
            </span>
            ,{" "}
            <span className="website-link">
              <a
                href="https://www.houselandmaps.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                House Land Maps
              </a>
            </span>
            , and{" "}
            <span className="website-link">
              <a
                href="https://www.reportsonline.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Reports Online
              </a>
            </span>
            . Contributing to enhanced digital presence and client engagement.
          </li>
        </ul>
      </div>
    </div>
  );
}
