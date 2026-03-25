import React from "react";
import "./Services.css";

function Services({ title, subtitle, services }) {
  return (
    <section className="Services-section" id="Services-Section">
      <h2 className="section-title">{title}</h2>
      <p className="section-para">{subtitle}</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} data-service={service.name}>
            <div className="service-image">
              <img loading="lazy" src={service.image} alt={service.name} />
              <div className="overlay">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;