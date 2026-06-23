"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaAnglesLeft, FaAnglesRight, FaRegFaceSmileBeam, FaLinkedinIn, FaEnvelope, FaChevronRight } from "react-icons/fa6";

const Contacts = () => {
    const containerRef = useRef(null);
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
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-white"
            id="Contact"
        >
            <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Title and Header Area */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
                        Let's Collaborate
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 flex items-center justify-center gap-3">
                        <FaAnglesRight className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                        Let's Keep In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch!</span>
                        <FaAnglesLeft className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                    </h2>
                </motion.div>

                {/* Core Layout Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* Left Block: Glassmorphic Interactive Info Card */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-zinc-900 rounded-3xl text-white shadow-2xl relative overflow-hidden z-20"
                        variants={fadeUpVariants}
                    >
                        {/* Ambient inner decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-500/10 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
                                Connect <span className="text-blue-400">Directly</span>
                            </h3>
                            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                               Currently working at Hitbox Collectables, a US-based company, as a Full Stack Developer. I also offer freelance development services for web applications and custom software solutions. If you have any requirements or would like to collaborate on a project, feel free to send me a message.
                            </p>

                            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-8">
                                <span>Looking forward to hearing from you</span>
                                <FaRegFaceSmileBeam className="w-4 h-4 text-amber-400 animate-bounce" />
                            </div>
                        </div>

                        {/* Premium Interactive Contact Channels */}
                        <div className="space-y-4 relative z-10">

                            {/* Mail Pill Link */}
                            <motion.a
                                href="mailto:asahaayan@gmail.com"
                                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-400 hover:bg-white/10 transition-all duration-300 group"
                                whileHover={{ x: 6 }}
                            >
                                <div className="flex items-center gap-4.5">
                                    <div className="p-3 bg-red-500/10 text-red-400 rounded-xl">
                                        <FaEnvelope className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-2xs text-zinc-400 font-bold uppercase tracking-wider">Email Me</span>
                                        <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">asahaayan@gmail.com</span>
                                    </div>
                                </div>
                                <FaChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                            </motion.a>

                            {/* LinkedIn Pill Link */}
                            <motion.a
                                href="https://www.linkedin.com/in/ayan-saha-b12aa0248"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-400 hover:bg-white/10 transition-all duration-300 group"
                                whileHover={{ x: 6 }}
                            >
                                <div className="flex items-center gap-4.5">
                                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                                        <FaLinkedinIn className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-2xs text-zinc-400 font-bold uppercase tracking-wider">Message Me</span>
                                        <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Ayan Saha</span>
                                    </div>
                                </div>
                                <FaChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                            </motion.a>

                        </div>
                    </motion.div>

                    {/* Right Block: Google Maps Embed Container with Premium Framing */}
                    <motion.div
                        className="lg:col-span-7 relative h-[450px] lg:h-auto rounded-3xl overflow-hidden border border-zinc-100 shadow-xl bg-zinc-50"
                        variants={fadeUpVariants}
                    >
                        {/* Top glassmorphic accent map header */}
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 border border-zinc-100 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-zinc-800">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Primary Workspace (Kolkata, IN)
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22777.1310809239!2d88.3865345!3d22.6764125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7MJCM9GQHJ9!2sAgarpara!5e0!3m2!1sen!2sus!4v1632398456860"
                            className="absolute left-0 top-0 h-full w-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300"
                            allowFullScreen
                            loading="lazy"
                            title="Ayan Saha Workspace Map Area"
                        />
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Contacts;