import React from "react";

export default function WorkExperience() {
  return (
    <div>
      {/* link this and add the skills / achievements section. add an arrow to click to go to skills and achievements */}
      <h3 className="content-card-title">Work Experience</h3>
      {/* CFC */}
      <div className="job">
        <div className="company-and-date">
          <h3>Coders For Causes</h3>
          <h3>June 2023-July 2023</h3>
        </div>

        <h3 className="position">Volunteer Developer</h3>
        <ul className="duties">
          <li>
            Worked with Community Spirit Foundation to develop{" "}
            <span className="website-link">
              <a
                href="https://stride-for-education.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Stride For Education
              </a>
            </span>{" "}
            a progressive web app built with Vue, Vuetify, and Django for their
            Winter 2023 Project.
          </li>
          <li>
            Led the design and development of the team dashboard and login
            modal, focusing on user-centric design principles to ensure ease of
            navigation and usage.
          </li>
          <li>
            Developed back-end tests, addressing various scenarios and edge
            cases to assess the application's stability, and functionality.
          </li>
          <li>
            Refined the codebase, optimising resource loading, and implementing
            best practices in web performance, to ensure the application ran
            smoothly and efficiently.
          </li>
        </ul>
      </div>

      {/* AR / A3D */}
      <div className="job">
        <div className="company-and-date">
          <h3>Asset Reports</h3>
          <h3>Feb 2021-Present</h3>
        </div>

        {/* Asset 3D */}
        <p className="position">
          Head of Sales & Customer Support for Asset 3D - Jan 2023-Present
        </p>
        <ul className="duties">
          <li>
            Led the successful initiative to become an Official Reseller of
            Matterport equipment and SaaS accounts, overseeing all aspects of
            project execution including planning, coordinating equipment
            purchases and sales.
          </li>
          <li>
            Drafted comprehensive business plans, establishing clear Marketing &
            Sales targets to guide organisational efforts. Coordinated and
            conducted extensive team training sessions across Perth, Melbourne,
            and Sydney, ensuring uniformity in skills and knowledge.
          </li>
          <li>
            Directed the design and execution of impactful marketing materials
            and EDM campaigns, establishing brand presence and reaching targeted
            audiences effectively.
          </li>
          <li>
            Utilised Squarespace, CSS, and JS to develop and maintain
            high-quality websites, implementing SEO strategies to enhance online
            presence and user experience.
          </li>
        </ul>

        {/* Asset Reports */}
        <p className="position vt-department">
          Head of Virtual Tours Department - Nov 2021-Present
        </p>
        <ul className="duties">
          <li>
            Managed and supported a team of 7 across three states, coordinating
            bookings and resolving operational issues. Conducted regular
            check-ins to foster a positive work environment.
          </li>
          <li>
            Maintained proactive engagement with stakeholders by consistently
            delivering high-quality deliverables, and collaborating with clients
            to understand their marketing needs, developing tailored content and
            branding materials using Adobe Illustrator and Photoshop
          </li>
          <li>
            Provided Level 1 & 2 support to resolve user issues in proprietary
            software systems
          </li>
          <li>
            Initiated and monitored quality control measures within the
            department to assure high standards, implementing corrective actions
            as necessary.
          </li>
          <li>
            Maintained and updated all company websites, including{" "}
            <span className="website-link">
              <a
                href="https://www.reportsonline.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Reports Online
              </a>
            </span>
            ,{" "}
            <span className="website-link">
              <a
                href="https://houselandmaps.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                House & Land Maps
              </a>
            </span>{" "}
            and{" "}
            <span className="website-link">
              <a
                href="https://www.asset3d.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Asset 3D
              </a>
            </span>
            , while optimising SEO to ensure a strong online presence.
          </li>
          <li>
            Salesforce Key User - designed EDMs, generated detailed reports,
            created dashboards for management, and input user data.
          </li>
          <li>
            Directed both personal and professional development initiatives
            within the Virtual Tours department, coordinating comprehensive
            onboarding and ongoing training for staff.
          </li>
        </ul>
      </div>
    </div>
  );
}
