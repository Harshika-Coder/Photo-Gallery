import "./Hero.css";
import {Link} from "react-router-dom";

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
            <Link to={GalleryLink} className="gallery">
            {GalleryText}
          </Link>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Hero
