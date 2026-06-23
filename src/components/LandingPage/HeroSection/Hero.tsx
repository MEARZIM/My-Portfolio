"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll/modules";
import HeroImage from '@/assets/me.png';
import CustomArrow from '@/assets/hero-element-2.png';
import { FaPlus, FaLinkedinIn } from "react-icons/fa6";
import { keypoints } from './keyPoints';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 18 }
    }
};

const Hero = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden lg:py-12 px-6 sm:px-16 py-10 custom-bg md:min-h-screen flex flex-col justify-center"
            id="Home"
        >
            {/* Decorative premium ambient overlays that blend into custom-bg */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none opacity-40" />

            {/* Main Grid Wrapper */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

                {/* STREAMING_CHUNK: Left Content & Introduction Copy Panel */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
                >
                    {/* Subtle Introduction Badge */}
                    <motion.span
                        variants={fadeUpVariants}
                        className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-4 block"
                    >
                        Welcome to my space
                    </motion.span>

                    {/* Dynamic Typography Header */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                    >
                        Hello, I&apos;m{" "}
                        <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent h-[1.15em]">
                            <TypeAnimation
                                sequence={[
                                    "Ayan Saha.",
                                    2500,
                                    "a Full Stack Dev.",
                                    1500,
                                    "an App Dev.",
                                    2000,
                                    "an AWS Cloud Engineer.",
                                    1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariants}
                        className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium"
                    >
                        Where Vision Meets Versatility. Dedicated to engineering robust backend architectures and highly polished digital experiences.
                    </motion.p>

                    {/* Interactive Responsive Buttons Block */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                    >
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-teal-500 hover:to-indigo-700 text-white font-bold text-center rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Hire Me
                        </Link>

                        <a
                            href="https://www.linkedin.com/in/ayan-saha-b12aa0248/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 border-2 border-white/20 hover:border-teal-400 hover:bg-white/5 text-white font-bold rounded-xl transition-all duration-300"
                        >
                            <FaLinkedinIn className="w-4 h-4 text-teal-400" />
                            View LinkedIn
                        </a>
                    </motion.div>
                </motion.div>

                {/* STREAMING_CHUNK: Right Profile Picture Container with custom round shape */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 relative flex flex-col items-center justify-center"
                >
                    {/* Aesthetic Background Halo Glow Ring */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-teal-400 to-indigo-400 opacity-20 blur-xl animate-pulse" />

                    {/* Clean custom-rounded framing image wrapper */}
                    <div className="relative rounded-full rounded-custom w-[260px] h-[260px] lg:w-[420px] lg:h-[420px] overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src={HeroImage}
                            alt="Ayan Saha Portrait Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* Custom Decorative Floating Connector Arrow */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-6 sm:left-4 z-20 pointer-events-none hidden sm:block"
                    >
                        <Image src={CustomArrow} alt="Visual connector arrow decoration" className="w-24 h-24 object-contain opacity-85 invert" />
                    </motion.div>
                </motion.div>

            </div>

            {/* STREAMING_CHUNK: Premium Transparent Glassmorphic Keypoints Showcases */}
            <div className="max-w-7xl mx-auto mt-10 pt-10 border-t border-white/10 relative z-10 w-full">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {keypoints.map((keyPoint, keys) => (
                        <motion.div
                            key={keys}
                            className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-400 hover:bg-white/10 hover:shadow-xl transition-all duration-300 backdrop-blur-xs"
                            variants={fadeUpVariants}
                        >
                            <div className="p-2.5 bg-teal-400/10 text-teal-400 rounded-xl shrink-0">
                                <FaPlus className="w-4 h-4" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-1">
                                    {keyPoint.keypoint}
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                                    {keyPoint.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;