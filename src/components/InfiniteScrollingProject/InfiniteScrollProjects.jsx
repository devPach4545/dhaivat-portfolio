import React, { useEffect, useState } from "react";
import styles from "./InfiniteScrollProjects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";

export const InfiniteScrollProjects = () => {
  const [clonedProjects, setClonedProjects] = useState([]);

  // Clone projects to create an illusion of infinite scrolling
  useEffect(() => {
    // We need multiple copies to ensure smooth looping
    setClonedProjects([...projects, ...projects, ...projects]);
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {clonedProjects.map((project, id) => (
            <div 
              key={id} 
              className={styles.projectWrapper}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};