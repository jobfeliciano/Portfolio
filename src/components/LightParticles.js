import React, { useRef, useEffect } from "react";
import p5 from "p5";
import "../styles/LightParticles.css";

const LightParticles = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      const num = 80;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < num; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-1, 1),
            vy: p.random(-1, 1),
          });
        }
        p.noStroke();
      };

      p.draw = () => {
        p.clear();
        p.background(0, 0); // Keep canvas transparent

        particles.forEach((pt, i) => {
          pt.x += pt.vx;
          pt.y += pt.vy;

          if (pt.x < 0 || pt.x > p.width) pt.vx *= -1;
          if (pt.y < 0 || pt.y > p.height) pt.vy *= -1;

          p.fill(0, 255, 255, 180);
          p.circle(pt.x, pt.y, 3);

          for (let j = i + 1; j < particles.length; j++) {
            const dist = p.dist(pt.x, pt.y, particles[j].x, particles[j].y);
            if (dist < 120) {
              p.stroke(0, 255, 255, 100);
              p.line(pt.x, pt.y, particles[j].x, particles[j].y);
              p.noStroke();
            }
          }
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={sketchRef} className="light-particles-canvas"></div>;
};

export default LightParticles;
