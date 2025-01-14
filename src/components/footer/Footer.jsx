import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Natanael Burgaud
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#experience">Compétences</a>
        </li>
        <li>
          <a href="#portfolio">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; 2025 Natanael Burgaud - Portfolio.</small>
      </div>
    </footer>
  );
};

export default Footer;
