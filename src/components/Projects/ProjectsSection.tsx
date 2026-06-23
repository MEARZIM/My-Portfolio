"use client";
import React, { useState, useRef, useId } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projects";

/* STREAMING_CHUNK: Defining premium tab selector capsule button */
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const layoutId = useId();
  return (
    <button
      onClick={() => onClick(name)}
      className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none ${isSelected
          ? "text-blue-600"
          : "text-zinc-500 hover:text-zinc-800"
        }`}
    >
      <span className="relative z-10">{name}</span>
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-full -z-0"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
    </button>
  );
};

/* STREAMING_CHUNK: Structuring the main Projects Grid panel */
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  // Safe check to make sure filtering works reliably
  const filteredProjects = projectsData.filter((project) => {
    if (tag === "All") return true;
    // Normalizes matching for common cases (e.g., "Fullstack", "Frontend")
    return project.tag.some((t: string) => t.toLowerCase() === tag.toLowerCase());
  });

  return (
    <section
      id="Projects"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Decorative premium ambient glow matching your overall profile canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* STREAMING_CHUNK: Rendering Section Typography Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
            My Creative Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 flex items-center justify-center gap-3">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              <svg className="w-8 h-8 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
                <path d="M11.5.75a.75.75 0 0 1 .75.75V4a.75.75 0 0 1-1.5 0V1.5a.75.75 0 0 1 .75-.75z" />
                <path d="M3.707 3.707a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06z" />
                <path d="M1.5 11.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H1.5z" />
                <path d="M3.707 20.293a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0z" />
                <path d="M11.25 20v2.5a.75.75 0 0 0 1.5 0V20a.75.75 0 0 0-1.5 0z" />
                <path d="M20.293 20.293a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-2.5-2.5z" />
                <path d="M20 12.75a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5H20z" />
                <path d="M20.293 3.707a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06z" />
              </svg>
            </motion.span>
          </h2>
        </div>

        {/* STREAMING_CHUNK: Tag Selector Row Component */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Fullstack"
            isSelected={tag === "Fullstack"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Frontend"
            isSelected={tag === "Frontend"}
          />
        </div>

        {/* STREAMING_CHUNK: Filtering & animating grid container */}
        <motion.div
          ref={sectionRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tags={project.tag} // Dynamically passes custom tags if configured
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;