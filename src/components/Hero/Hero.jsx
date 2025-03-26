import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Hi, I'm Dhaivat", "I go by Dev"];
  
  useEffect(() => {
    let currentIndex = 0;
    let typingSpeed = isDeleting ? 75 : 150; // Faster when deleting
    
    const typingInterval = setInterval(() => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing forward
        if (currentIndex <= currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex));
          currentIndex++;
        } else {
          // Finished typing current text, pause before deleting
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsDeleting(true);
            // Reset the typing interval with the new deleting state
            // This is handled when the useEffect runs again due to state change
          }, 1000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          currentIndex--;
        } else {
          // Finished deleting, move to next text
          clearInterval(typingInterval);
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          // Reset the typing interval with the new typing state
          // This is handled when the useEffect runs again due to state change
        }
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [isDeleting, textIndex]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.typewriterText}>{displayText}</span>
          <span className={styles.cursor}></span>
        </h1>
        <p className={styles.description}>
        I am a fourth year Computer Science student at UCSD. I am interested in Software Engineering, Machine Learning, and Data Science.

        </p>
        <a href="mailto:dhaivatpachchigar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/mypic.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};