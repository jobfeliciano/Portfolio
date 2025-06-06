import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        En dehors du travail, je m’intéresse à tout ce qui touche aux 
        nouvelles technologies, aux jeux vidéo et à l’apprentissage continu.
      </p>
    );

    const tech_stack = [
      "C#",
      "SQL",
      "React.js",
      "Java",
      "Javascript",
      "Typescript",
      "ASP.NET",
      "API",
      "JSon",
      "Python"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {"Ma stack technique actuelle inclut:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[one]}
            </div>
            <div className="about-image">
              <img alt="Job Likeufack" src={"/assets/me.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
