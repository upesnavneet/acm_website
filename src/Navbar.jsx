import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "./assets/acmlogoo.png";

function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const scrollContainer = document.querySelector(".app-scroll-wrapper");

    const handleScroll = () => {
      if (!scrollContainer) return;

      const currentScrollY = scrollContainer.scrollTop;

      if (currentScrollY > lastScrollY.current) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <div className="navbar-container">
        <a href="https://upesnavneet.github.io/acm_website/" className="navbar-logo">
          <img src={logo} alt="ACM Logo" className="logo-img" />
        </a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#initiatives">Our Initiatives</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
