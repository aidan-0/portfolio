import React from "react";
import "./Contact.css";
import { Icon } from "@iconify/react";

export default function Contact({ onClose }) {
  return (
    <div className="modal" >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <Icon icon="ep:close-bold" />
        </button>
        <h1 className="modal-text">Contact Me</h1>
        <div className="modal-info">
          <a
            href="mailto:am.mcdonald@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img src="./email-contact.svg" className="icon contact-icon" />
            <h3 className="modal-text">Email</h3>
          </a>

          <a
            href="https://github.com/aidan-0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img src="./github.svg" className="icon contact-icon" />
            <h3 className="modal-text">Github</h3>
          </a>

          <a
            href="https://discord.com/users/704153681632952370"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img src="./discord.svg" className="icon contact-icon" />
            <h3 className="modal-text">Discord</h3>
          </a>

          <a
            href="https://www.linkedin.com/in/aidan-mcdonald0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img src="./linkedin.svg" className="icon contact-icon" />
            <h3 className="modal-text">LinkedIn</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
