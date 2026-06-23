"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import {
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
} from "react-icons/fa6";

const socialLinks = [
    {
        name: "GitHub",
        icon: <FaGithub className="w-5 h-5" />,
        url: "https://github.com/MEARZIM",
        hoverColor: "hover:text-white hover:border-zinc-100 hover:bg-zinc-800/50"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="w-5 h-5" />,
        url: "https://www.linkedin.com/in/ayan-saha-b12aa0248",
        hoverColor: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5"
    },
    {
        name: "X (Twitter)",
        icon: <FaXTwitter className="w-5 h-5" />,
        url: "https://twitter.com/ayansah68348681",
        hoverColor: "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5"
    },
    {
        name: "Instagram",
        icon: <FaInstagram className="w-5 h-5" />,
        url: "https://www.instagram.com/fucking_nobody17/",
        hoverColor: "hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/5"
    },
    {
        name: "Facebook",
        icon: <FaFacebookF className="w-5 h-5" />,
        url: "https://www.facebook.com/ayan%20saha",
        hoverColor: "hover:text-blue-500 hover:border-blue-600/30 hover:bg-blue-600/5"
    }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative custom-bg border-t border-white/5 py-16 px-6 sm:px-16 overflow-hidden">
            {/* Soft color glows to match the background of the Hero section */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* STREAMING_CHUNK: Main Footer Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-10 pb-12">

                    {/* Column 1: Brand introduction & Dynamic Social Grid */}
                    <div className="md:col-span-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black tracking-tight text-white mb-4">
                                Ayan <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Saha</span>
                            </h3>
                            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                                Find me on any of these platforms. I respond within 1-2 business days to discuss new roles, cloud architecture contracts, or custom full-stack solutions.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`h-11 w-11 rounded-xl bg-white/5 border border-white/10 text-zinc-400 flex items-center justify-center transition-all duration-300 backdrop-blur-xs ${social.hoverColor}`}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Internal Quick Navigation Sitemap */}
                    <div className="md:col-span-2 sm:col-span-4 md:text-end">
                        <h4 className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-2.5">
                            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="text-zinc-400 hover:text-white text-sm font-semibold transition-colors duration-200 cursor-pointer hover:underline hover:underline-offset-4"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Tech Stack & Dev Info Checklist */}
                    {/* <div className="md:col-span-3 sm:col-span-6">
                        <h4 className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
                            Architecture Details
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Client Stack", value: "Next.js & React" },
                                { label: "Animations", value: "Framer Motion" },
                                { label: "Deployment", value: "AWS Cloud S3" },
                                { label: "Responsive Layout", value: "Tailwind CSS" }
                            ].map((tech, i) => (
                                <li key={i} className="text-sm">
                                    <span className="block text-zinc-500 text-2xs font-bold uppercase tracking-wider">
                                        {tech.label}
                                    </span>
                                    <span className="font-semibold text-zinc-300">
                                        {tech.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                </div>

                {/* STREAMING_CHUNK: Copyright Footer Strip */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-xs font-semibold text-zinc-500">
                        All rights reserved © {currentYear} Ayan Saha. Designed for maximum responsiveness.
                    </p>
                    <p className="text-2xs font-bold tracking-wider text-teal-400/80 bg-teal-400/5 px-3 py-1 rounded-full border border-teal-400/10">
                        VERIFIED SECURE PLATFORM
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;