// import React, { useRef, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const navRef = useRef();

//   useEffect(() => {
//     const nav = navRef.current;
//     const list = nav.querySelector(".nav-list");
//     const cloneTop = list.cloneNode(true); // Clone the list
//     const cloneBottom = list.cloneNode(true); // Clone the list
    
//     nav.insertBefore(cloneTop, list); // Add one clone above the original list
//     nav.appendChild(cloneBottom); // Append the cloned list below the original list

//     nav.scrollTop = list.scrollHeight; // Initially set the scroll position to start at the original list
    
//     const handleScroll = () => {
//       if (nav.scrollTop >= list.scrollHeight * 2) {
//         nav.scrollTop = list.scrollHeight; // Reset scroll position to the middle when it reaches the end
//       } else if (nav.scrollTop <= 0) {
//         nav.scrollTop = list.scrollHeight; // Set scroll position to the middle when it reaches the top
//       }
//     };

//     nav.addEventListener("scroll", handleScroll);
//     return () => nav.removeEventListener("scroll", handleScroll);
//   }, []);


  
//   return (
//     <nav className="scrolling-nav" ref={navRef}>
//       <ul className="nav-list" id="nav-list" data-mouse-down-at="0">
//       <li>
//           <Link to="aboutme" className="link-style">
//             About Me
//           </Link>
//         </li>
//         <li>
//           <Link to="resume" className="link-style">
//             Resume
//           </Link>
//         </li>
//         <li>
//           <Link to="projects" className="link-style">
//             Projects
//           </Link>
//         </li>
//         {/* when clicking on projects, make the nav bar show the full list of projects and have it scrollable like the nav */}
//         <li>
//           <Link to="contact" className="link-style">
//             Contact
//           </Link>
//         </li>
//         {/* clicking on contact provides a modal with all contact details */}
//       </ul>
//     </nav>
//   );
// }