import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Apprenez à me connaître</h5>
      <h2>À propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Bac +2</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projets complétés</small>
            </article>
          </div>
          <p>
          Je suis étudiant en deuxième année à l'École IPI, sur le campus Igensia (anciennement IGS) à Blagnac, où je suis en bachelor développeur. <br />
          Je me forme au développement web et logiciel. Passionné par les nouvelles technologies, je suis constamment en quête d’apprendre et de maîtriser des outils et des langages innovants, que ce soit à l'école, ou de manière autodidacte. <br />
          J'ai toujours eu davantage de préférences pour m'occuper des parties back, plutôt que des parties front.
          </p>
          <a href="#contact" className="btn btn-primary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
