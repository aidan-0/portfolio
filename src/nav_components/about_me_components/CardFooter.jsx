import React from "react";
import "./AboutMe.css";

export default function CardFooter() {
  return (
    <footer>
      <a
        href="https://github.com/aidan-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./github.svg" className="icon" />
      </a>

      <a
        href="https://discord.com/users/704153681632952370"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./discord.svg" className="icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/aidan-mcdonald0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./linkedin.svg" className="icon" />
      </a>
    </footer>
  );
}
