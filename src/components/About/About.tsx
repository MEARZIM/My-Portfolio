"use client";

import Image from "next/image";
import React, { useTransition, useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroImage from "@/assets/me.png";

import { details } from "./details";


const TabButton = ({
    active,
    onClick,
    children
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) => {
    const layoutId = useId();
    return (
        <button
            onClick={onClick}
            className={`relative py-2.5 px-5 text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${active
                    ? "text-blue-600"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
        >
            <span className="relative z-10">{children}</span>
            {active && (
                <motion.div
                    layoutId={layoutId}
                    className="absolute inset-0 bg-blue-50/70 rounded-lg -z-0 border-b-2 border-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </button>
    );
};

// ==========================================
// MAIN COMPONENT MAIN LAYOUT
// ==========================================
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const activeContent = details.find((t) => t.id === tab)?.content;

    return (
        <section
            className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-white"
            id="About"
        >
            {/* Decorative premium radial glows */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Profile Image Container */}
                <motion.div
                    className="lg:col-span-5 relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Accent outer gradient glow */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 opacity-60 blur-lg" />

                    <div className="relative group overflow-hidden rounded-2xl border border-zinc-400 bg-white p-2.5 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                        <Image
                            src={HeroImage}
                            width={450}
                            height={450}
                            alt="Profile portrait"
                            className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Content & Tab Panel */}
                <motion.div
                    className="lg:col-span-7 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {/* Subtitle Badge */}
                    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
                        Get To Know Me
                    </span>

                    {/* Main Title */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                        About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-base sm:text-lg leading-relaxed text-zinc-600 mb-8 max-w-2xl">
                       {` I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        Sequelize, HTML, CSS, and Git. I am a quick learner, a dedicated team player,
                        and I'm always looking to push the boundaries of digital experiences.`}
                    </p>

                    {/* Tab Selection Row */}
                    <div className="flex flex-row space-x-1 border-b border-zinc-100 pb-2 mb-6 overflow-x-auto scrollbar-none">
                        <TabButton onClick={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton onClick={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton onClick={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            Certifications
                        </TabButton>
                    </div>

                    {/* Dynamic Content Panel */}
                    <div className="min-h-[190px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeContent}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;