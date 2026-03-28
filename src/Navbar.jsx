import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Helper to close menu when a link is clicked
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar" aria-label="Primary navigation">
          {/* Hamburger toggle for mobile */}
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="header-nav-list"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul id="header-nav-list" className={menuOpen ? "open" : ""}>
          <li>
            <a
              href="#Home-page"
              onClick={(e) => handleLinkClick(e, "#Home-page")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Blog-Section"
              onClick={(e) => handleLinkClick(e, "#Blog-Section")}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#Testimonial-Section"
              onClick={(e) => handleLinkClick(e, "#Testimonial-Section")}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#Services-Section"
              onClick={(e) => handleLinkClick(e, "#Services-Section")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#Booking-Section"
              onClick={(e) => handleLinkClick(e, "#Booking-Section")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Navbar
