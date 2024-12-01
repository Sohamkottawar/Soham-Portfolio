"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "A modern portfolio website built with Next.js, featuring a dynamic intro, interactive project showcase, professional experience timeline, skill highlights, and an integrated contact form. Fully responsive, optimized for performance, and tailored to leave a strong impression.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sohamkottawar/Soham-Portfolio",
    previewUrl: "https://soham-portfolio-soham-kottawars-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Pictofest Voteing Platform",
    description: "• Developed a full-stack web application to manage an intercollegiate art festival, serving 3.5K+ users . Designed and implemented a robust voting feature, resulting in 4.5K+ votes cast across multiple entries.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sohamkottawar/PictoFest-Frontend",
    previewUrl: "https://www.pictofest.in/",
  },
  {
    id: 3,
    title: "Pasc Alumni-Portel",
    description: "Developed a networking platform connecting alumni with students, with 1200+ active users.Contributed to the development of the Login and Add Post pages, enhancing platform functionality. .",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sohamkottawar/Pasc_Frontend_Alumni_2.0",
    previewUrl: "https://staging-test--alumniportal-test.netlify.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;