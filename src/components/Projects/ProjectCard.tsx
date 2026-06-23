"use client";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl?: string;
  tags?: string[]; // Optional array of tech tags to make it look highly professional
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tags = ["Next.js", "TypeScript", "Tailwind"] // Fallback sample tags
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-100/80 transition-all duration-300 flex flex-col h-full"
    >
      {/* Top Half: Interactive Image Surface */}
      <div className="h-52 md:h-60 relative overflow-hidden bg-zinc-100 shrink-0">

        {/* Project Thumbnail Image with Scale-on-Hover */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />

        {/* Premium Soft Overlay Crossfade */}
        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">

          {/* GitHub Action Link */}
          {gitUrl && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                aria-label="View Source Code on GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </motion.div>
          )}

          {/* Live Preview Action Link */}
          {previewUrl && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                aria-label="View Live Project Site"
              >
                <FaEye className="h-5 w-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Half: Structured Typography & Metadata */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Tag Badges Array */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-2xs font-bold tracking-wide uppercase bg-zinc-50 border border-zinc-200/60 text-zinc-500 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title changes to theme color dynamically on card hover */}
          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 tracking-tight">
            {title}
          </h3>

          <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Subtle "Learn More" interactive trigger pointer */}
        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-blue-600 group/btn">
          <span className="group-hover:underline group-hover:underline-offset-4">View Project Insights</span>
          <svg
            className="w-4 h-4 transform transition-transform duration-200 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;