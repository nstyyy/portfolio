import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Bonjour Je suis</h5>
        <h1>Natanael Burgaud</h1>
        <h5 className="text-light">Étudiant à l'école IPI, en bachelor développeur, à Blagnac</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Faire défiler
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
