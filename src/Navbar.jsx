import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isGalleryPage = location.pathname === "/gallery-page";

  // Hide navbar on gallery page
  if (isGalleryPage) {
    return null;
  }

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
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar" aria-label="Primary navigation">
          {/* Hamburger toggle for mobile */}
          <button
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="header-nav-list"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul id="header-nav-list" className={menuOpen ? "open" : ""}>
            {!isHomePage && (
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
            )}
            <li>
              {isHomePage ? (
                <a
                  href="#Blog-Section"
                  onClick={(e) => handleLinkClick(e, "#Blog-Section")}
                >
                  Blog
                </a>
              ) : (
                <Link to="/?section=blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a
                  href="#Testimonial-Section"
                  onClick={(e) => handleLinkClick(e, "#Testimonial-Section")}
                >
                  Testimonials
                </a>
              ) : (
                <Link
                  to="/?section=testimonials"
                  onClick={() => setMenuOpen(false)}
                >
                  Testimonials
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a
                  href="#Services-Section"
                  onClick={(e) => handleLinkClick(e, "#Services-Section")}
                >
                  Services
                </a>
              ) : (
                <Link
                  to="/?section=services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a
                  href="#Booking-Section"
                  onClick={(e) => handleLinkClick(e, "#Booking-Section")}
                >
                  Contact Us
                </a>
              ) : (
                <Link to="/?section=booking" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
