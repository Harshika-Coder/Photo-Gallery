import React from 'react';
import './Footer.css';


function Footer({ brandName, tagline, links, contacts, socials, year }) {
  return (
    <footer className="footer-section">
      <div className="footer-brand">
        <h3 className="brandname">{brandName}</h3>
        <p>{tagline}</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-contact">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer">
            {contact.icon}
          </a>
        ))}
      </div>

      <div className="footer-social">
        {socials.map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <div className="footer-copy">
        <p>&copy; {year} {brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;