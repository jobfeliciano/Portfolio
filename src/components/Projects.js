import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "My TV Explorer": {
        title:  (<a className ="tv" href="https://my-tv-explorer-git-main-jobfelicianos-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <u>My TV Explorer</u>
                </a>),
        desc:
          "Une application web pour explorer, rechercher et consulter des fiches détaillées de séries télévisées.",
        techStack: "REACT.JS, JAVASCRIPT, API REST",
        link: "https://github.com/jobfeliciano/MyTV-Explorer",
        open: "https://my-tv-explorer-git-main-jobfelicianos-projects.vercel.app/",
        image: "/assets/tv_explorer.png"
      },
      "Defense Tower": {
        title: "Defense Tower",
        desc:
          "Un jeu vidéo de stratégie en temps réel où le joueur défend sa base contre des vagues d’ennemis.",
        techStack: "C# (UNITY)",
        link: "https://github.com/jobfeliciano/Defense-Tower",
        image: "/assets/defensetower.png"
      },
      "CinéQuizz": {
        title: "CinéQuizz",
        desc:
          "Une application mobile ludique pour tester ses connaissances en cinéma à travers des jeux de quiz interactifs.",
        techStack: "JAVA, ANDROID STUDIO, FIREBASE",
        link: "https://github.com/jobfeliciano/CineQuizz",
        image: "/assets/cinequizz.png"
      },
      "Icy Tower Clone": {
        title: "Icy Tower Clone",
        desc:
          "Une réinterprétation du célèbre jeu de plateforme Icy Tower, conçue pour perfectionner les mécaniques de saut et de physique.",
        techStack: "C# (UNITY)",
        link: "https://github.com/jobfeliciano/Icy-Tower",
        image: "/assets/icytower.png"
      }
    };
    const projects = { 
      "My TV Explorer": {
        title:  (<a className ="tvproject" href="https://my-tv-explorer-git-main-jobfelicianos-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <u>My TV Explorer</u>
                </a>),
        desc:
          "Application web en React.js connectée à une API REST (TMDB) permettant la recherche et l’affichage de séries télévisées. Utilise un routage dynamique, une gestion d’état locale et des composants réutilisables dans une interface responsive.",
        techStack: "REACT.JS, JAVASCRIPT, API REST",
        link: "https://github.com/jobfeliciano/MyTV-Explorer",
        open: "https://my-tv-explorer-git-main-jobfelicianos-projects.vercel.app/"
      },
      "Defense Tower": {
        title: "Defense Tower",
        desc:
          "Jeu de stratégie développé en Unity avec C#, intégrant la gestion de vagues d’ennemis, IA simple, upgrades de tours et interface en temps réel. Utilise des mécaniques événementielles et une structure optimisée du cycle de jeu.",
        techStack: "C# (UNITY)",
        link: "https://github.com/jobfeliciano/Defense-Tower"
      },
      "CinéQuizz": {
        title: "CinéQuizz",
        desc:
          "Application mobile Android en Java avec Firebase, proposant des quiz cinéma interactifs, une authentification utilisateur et un suivi des scores. Utilise RecyclerView, architecture MVC et persistance locale.",
        techStack: "JAVA, ANDROID STUDIO, FIREBASE",
        link: "https://github.com/jobfeliciano/CineQuizz"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3> 
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{projects[key]["title"]}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
