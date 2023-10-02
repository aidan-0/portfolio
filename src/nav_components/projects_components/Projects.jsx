import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

export default function Projects() {
const projectsContainerRef = useRef(null);

useEffect(() => {
  const handleMouseMove = (e) => {
    const cards = projectsContainerRef.current.getElementsByClassName("project-card")
    for (const card of cards) {
      const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  const container = projectsContainerRef.current;
  container.addEventListener('mousemove', handleMouseMove);

  
  return () => container.removeEventListener('mousemove', handleMouseMove);
}, []);

  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Stride For Education",
      img: <img src="./Stride-for-Education.png" className="project-img" />,
      description:
        "Stride For Education is a progressive web app which will enable participants to track their kilometers while engaging in a walking/running/wheeling challenge. Through the app, we aim to raise funds and awareness for Community Spirit Foundation.",
      techStack: ["Vue.js", "Vuetify", "Typescript", "Python"],
    },
    {
      title: "RESTful API Movie Selector",
      img: (
        <img src="./Movie-selector-API.png" alt="" className="project-img" />
      ),
      description:
        "Use the omdb API to search films, see full film details, and add them to your watchlist. Saves to Localstorage.",
      techStack: ["RESTful API", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Portfolio",
      img: <img src="./portfolio-img.png" className="project-img" />,
      description:
        "This portfolio serves as a platform to consolidate and showcase a selection of my projects.",
      techStack: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Shopping List App",
      img: <img src="./Shopping-Cart.png" className="project-img" />,
      description:
        "This portfolio serves as a platform to consolidate and showcase a selection of my projects.",
      techStack: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "New Tab Chrome Extension",
      img: <img src="" className="project-img" />,
      description:
        "A new default tab with widgets like weather, location, time, a nice background picture etc.",
      techStack: ["React", "JavaScript", "CSS"],
    },
    {
      title: "TBC",
      img: <img src="" className="project-img" />,
      description:
        "TBC.",
      techStack: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <div>
      <section className="projects-section" id="projects">
        <h2 className="project-header">Projects</h2>
        <div id="projects-container" ref={projectsContainerRef}>
          {cards.map((card, index) => (
            <div
              className={`project-card ${
                hoveredCard !== null
                  ? hoveredCard === index
                    ? ""
                    : "card-blur"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              key={index}
            >
              <div class="grid-container">
                <div class="project-image-container">{card.img}</div>
                <div class="project-title">{card.title}</div>
                <div class="project-description">{card.description}</div>
                <div class="project-tech">
                  {" "}
                  {card.techStack &&
                    card.techStack.map((tech, i) => (
                      <button key={i} className="tech-button">
                        {tech}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
