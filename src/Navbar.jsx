import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#Home-page">Home</a>
          </li>
          <li>
            <a href="#Blog-Section">Blog</a>
          </li>
          <li>
            <a href="#Testimonial-Section">Testimonials</a>
          </li>
          <li>
            <a href="#Services-Section">Services</a>
          </li>
          <li>
            <a href="#Booking-Section">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
