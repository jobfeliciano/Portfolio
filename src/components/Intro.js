import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FadeInSection from "./FadeInSection";
import LightParticles from "./LightParticles";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
     <div id="intro-wrapper">
  <LightParticles />
  <div id="intro-content">
    <TypeAnimation
      sequence={["Salut,", 800, "Salut, moi c’est Job."]}
      wrapper="span"
      speed={50}
      repeat={0}
      className="intro-title"
    />
   
    <FadeInSection>
      <div className="intro-subtitle">Je code et crée des logiciels</div>
      <div className="intro-desc">
        Je suis développeur logiciel basé au Québec. Mon parcours m’a permis de contribuer à des projets concrets, allant d’applications web dynamiques à des outils utilisés en entreprise. Aujourd’hui, je cherche un environnement où je peux évoluer, relever de nouveaux défis et créer des solutions qui ont du sens.
      </div>
      <a href="mailto:likeufackjob@gmail.com" className="intro-contact">
        <EmailRoundedIcon />{" Dites bonjour!"}
      </a>
    </FadeInSection>
  </div>
</div>

    );
  }
}

export default Intro;
