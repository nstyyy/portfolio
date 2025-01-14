import "./portfolio.css";

import IMG1 from "../../assets/LaboApp.png";
import IMG2 from "../../assets/Flutter.png";
import IMG3 from "../../assets/Fivem.png";
import IMG4 from "../../assets/Todolist.png";
import IMG5 from "../../assets/discordjs.png";
import IMG6 from "../../assets/Atelier.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Laboratoire App",
      img: IMG1,
      description:
        "Site pour les étudiants permettants de voir le matériel de l'école, de l'emprunté, et laisser les administrateurs administrer.",
      technologies: "React.js | Express | Tailwind CSS | NodeJS",
      link: "https://github.com/nstyyy/labo-app",
    },
    {
      id: 2,
      title: "Application flutter",
      img: IMG2,
      description:
        "Application flutter permettant de générer des QR Code, voir le nombre d'utilisations etc.",
      technologies: "Dart | Android",
      link: "https://github.com/nstyyy/flutter-app",
    },
    {
      id: 3,
      title: "Serveur GTARP",
      img: IMG3,
      description:
        "Serveur de jeux GTA5 RP sur la plateforme FiveM.",
      technologies: "LUA | HTML | JavaScript | MySQL",
      link: "https://github.com/nstyyy/GreedIsland",
    },
    {
      id: 4,
      title: "Todolist app",
      img: IMG4,
      description:
        "Simple application permettant de créer des tâches (stockées en bdd), les mettre en cours, terminé, et voir qui s'en occupe.",
      technologies: "HTML | CSS | Javascript | MySQL",
      link: "https://github.com/nstyyy/todolist-app",
    },
    {
      id: 5,
      title: "Bot discord",
      img: IMG5,
      description:
        "Bot discord gérant un serveur complet, création de tickets avec logs, annonces automatiques, administration du serveur.",
      technologies: "Javascript | DiscordJS | NodeJS | MongoDB",
      link: "https://github.com/nstyyy/discord-bot",
    },
    {
      id: 6,
      title: "Site de vente de tableaux",
      img: IMG6,
      description:
        "Site pour un membre de ma famille, permettant d'afficher ses oeuvres, avec le prix etc..",
      technologies: "HTML | CSS | Javascript",
      link: "https://github.com/nstyyy/atelier-burgaud.github.io",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Mes projets récents</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Voir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
