import React from "react";
import "./Hero.css";

function Hero({ title, description, buttonText, buttonLink, GalleryLink, GalleryText}) {
  return (
    <section className="hero" id="Home-page">
      <main className="main-content">
        <section className="content">
          <span className="logo-text">{title}</span>
          <p className="content-description">{description}</p>
          <div className="buttonlink">
            <a href={buttonLink} className="bookme">
            {buttonText}
          </a>
            <a href={GalleryLink} className="GalleryView">
            {GalleryText}
          </a>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Hero;
