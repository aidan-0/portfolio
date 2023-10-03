import React, { useEffect, useState, useRef } from "react";
// import Header from './Header';
import Content from "./Content";
import Navbar from "./Navbar";
import Socials from "./Socials";

export default function App() {
  // Side Accent
  const [sideAccentY, setSideAccentY] = useState(0);

  const handleMouseMove = (e) => {
    setSideAccentY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="page-content">
      <div className="follower--right" style={{ top: sideAccentY }}></div>
      {/* <Header /> */}
      <div className="main-content">
        <Navbar />
        <Content />
        <Socials />
      </div>
    </div>
  );
}
