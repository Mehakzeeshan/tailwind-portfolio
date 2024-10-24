"use client"
import React, { useState, useRef } from "react";
import ProjectCards from './projectCards';
import ProjectTag from './projectTag';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
      id: 1,
      title: "My Personal Resume",
      description:"My personal resume webpage using html,css and typescript",
      image: "/images/projects/project1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mehakzeeshan/Hackathon.git",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
    {
      id: 2,
      title: "Men's Clothing Website",
      description: "Zeeshan Cloth store, a clothing website using html,css and javascript.",
      image: "/images/projects/project2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mehakzeeshan",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
    {
      id: 3,
      title: "TIC TAC TOE",
      description: "Fun game for every age group using html, css and javascript.",
      image: "/images/projects/project3.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/Mehakzeeshan",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
    
    {
      id: 4,
      title: "Movie Searching Application",
      description: "A helpful app that helps you in searching movies so that everyone can enjoy their favorite movie. It was build using next.js and tailwind CSS.",
      image: "/images/projects/project4.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mehakzeeshan/movie-search-app.git",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
    {
      id: 5,
      title: "Random Joke App",
      description: "A funny app to make everone smile, build using Next.JS and TailwindCSS",
      image: "/images/projects/project5.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/Mehakzeeshan/random-joke-generator.git",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
    {
      id: 6,
      title: "Weather-Widget App",
      description: "A weather widget app using Next.JS and Tailwind CSS. A useful app for everyone to get updates about weather all across the world.",
      image: "/images/projects/project6.png", 
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/Mehakzeeshan/weather-widget-app.git",
      previewUrl: "https://github.com/Mehakzeeshan",
    },
  ];
  


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
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
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
            <ProjectCards
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