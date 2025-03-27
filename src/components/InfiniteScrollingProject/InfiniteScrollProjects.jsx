import React, { useEffect, useState, useRef } from "react";
import styles from "./InfiniteScrollProjects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";

export const InfiniteScrollProjects = () => {
  const [clonedProjects, setClonedProjects] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Clone projects to create an illusion of infinite scrolling
  useEffect(() => {
    // We need multiple copies to ensure smooth looping
    setClonedProjects([...projects, ...projects, ...projects]);
  }, []);

  // Handle mouse events for manual scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Toggle auto-scrolling animation
  const handleMouseEnter = () => {
    setIsScrolling(false);
  };

  const handleMouseExit = () => {
    setIsScrolling(true);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div 
        className={`${styles.scrollContainer} ${isScrolling ? '' : styles.paused}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
      >
        <div 
          ref={scrollContainerRef}
          className={styles.manualScrollContainer}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`${styles.scrollContent} ${isScrolling ? '' : styles.paused}`}>
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
      </div>
    </section>
  );
};