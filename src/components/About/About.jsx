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
              <h3>Undergrad ML research assitant</h3>
              <p>
              I worked on making Generative Adversarial Networks and Vision Transformers. In simpler words, I worked on a project to avoid expensive biopsies for identifying liver diseases.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Freelance Frontend developer</h3>
              <p>
                I made a beautiful website for a local business. I used React and Tailwind CSS.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};