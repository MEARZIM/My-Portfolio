"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import HeroImage from '@/assets/me.png'
import { motion } from "framer-motion";
import { details } from "./details";


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);




    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTransition(() => {
            setTab(id);
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const appearPosition = 400;
            const scrollY = window.scrollY;

            if (scrollY >= appearPosition) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

    }, []);


    return (
        <section className="text-white lg:py-20" id="About">
            <div className={`md:grid md:grid-cols-2 gap-2 items-center py-8 px-4 xl:gap-2 sm:py-16 xl:px-28 
            transform transition-transform ${isVisible ? 'translate-x-0 duration-1000' : '-translate-x-full duration-1000'}`}>
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)}
                >

                    <Image src={HeroImage} width={500} height={500} alt={""} onLoad={() => setIsLoaded(true)}/>
                </motion.div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">About Me</h2>
                    <p className="text-base lg:text-lg text-black">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 ml-2 text-black">
                        {details.find((t: any, key: any) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;