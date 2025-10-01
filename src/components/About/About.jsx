import React, { useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <img
          src={isHovering ? getImageUrl("about/mypic_coolimg.png") : getImageUrl("about/mypic_med.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Undergrad ML research assistant</h3>
              <p>
              I worked on making Generative Adversarial Networks and Vision Transformers. In simpler words, I worked on a project to avoid expensive biopsies for identifying liver diseases.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Engineering Intern | DataLegion AI</h3>
              <p>
                Deployed a scalable resume transcription service with RabbitMQ and Elasticsearch, reducing search times by 93% and increasing test coverage to 90% with Pytest.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Freelance Software Developer | MetaBolix Institute</h3>
              <p>
                Built a responsive ecommerce site with Next.js and React, improving mobile performance by 30% and implementing robust testing with Vitest and React Testing Library.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer | TritonScript, UCSD</h3>
              <p>
                Led development of an academic note-sharing platform with 100+ active users, implementing RESTful APIs, AWS S3, and MongoDB to achieve 99.9% uptime and sub-2s load times.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};