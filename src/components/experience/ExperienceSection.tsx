"use client";
import React from "react";
import { motion } from "framer-motion";

import { experiences } from "./experienceDetails";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 18 }
    }
};

// ==========================================
// MAIN WORK EXPERIENCE SECTION
// ==========================================
const ExperienceSection = () => {
    return (
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-white" id="Experience">
            {/* Dynamic ambient context glow matching your main design token */}
            <div className="absolute top-1/3 right-12 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-12 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Header Block */}
                <div className="mb-16 text-left">
                    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
                        My Journey So Far
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                        Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
                    </h2>
                </div>

                {/* Timeline Core Container */}
                <motion.div
                    className="relative border-l border-zinc-200 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative group"
                        >
                            {/* Timeline Indicator Ring */}
                            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 ring-4 ring-white group-hover:bg-blue-600 transition-colors duration-300 z-10" />

                            {/* Card Surface */}
                            <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-100/80 rounded-2xl transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/[0.02]">

                                {/* Meta Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                                            {exp.role}
                                        </h3>
                                        <p className="text-base font-semibold text-zinc-700 mt-0.5 flex items-center gap-2">
                                            {exp.company}
                                            <span className="w-1 h-1 bg-zinc-400 rounded-full" />
                                            <span className="text-sm font-medium text-zinc-500">{exp.location}</span>
                                        </p>
                                    </div>

                                    {/* Timeframe Badges */}
                                    <div className="flex flex-row md:flex-col items-center md:items-end gap-2 self-start md:self-auto">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wide shadow-2xs">
                                            {exp.period}
                                        </span>
                                        <span className="text-xs font-semibold text-zinc-400">
                                            • {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Optional Highlight Metric Tags */}
                                {exp.metrics && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.metrics.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-2xs font-extrabold tracking-wider uppercase bg-white border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded-md shadow-2xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Refined Custom Bullet List */}
                                <ul className="space-y-3.5">
                                    {exp.highlights.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                                            {/* Premium Accent Bullet Point */}
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-80" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;