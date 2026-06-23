
// ==========================================
// CUSTOM STYLED TECH ICONS (SVG PATHS)

import { motion } from "framer-motion";

// ==========================================
const CodeIcon = () => (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const DatabaseIcon = () => (
    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const CloudIcon = () => (
    <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);

const GraduationIcon = () => (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
);

const AwardIcon = () => (
    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

// ==========================================
// ANIMATION VARIANTS FOR LIST ITEMS
// ==========================================
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
        },
    },
};

// ==========================================
// REDESIGNED TAB DETAILS CONTENT
// ==========================================
export const skillsData = [
    { name: "Next.js", type: "Frontend", icon: <CodeIcon /> },
    { name: "React", type: "Frontend", icon: <CodeIcon /> },
    { name: "React-Native", type: "Mobile", icon: <CodeIcon /> },
    { name: "TypeScript", type: "Language", icon: <CodeIcon /> },
    { name: "Node.js", type: "Backend", icon: <DatabaseIcon /> },
    { name: "PostgreSQL & NoSQL", type: "Database", icon: <DatabaseIcon /> },
    { name: "AWS", type: "DevOps", icon: <CloudIcon /> },
    { name: "Java", type: "Language", icon: <CodeIcon /> },
];

export const educationData = [
    {
        degree: "MCA (Master of Computer Applications)",
        institution: "HIT (Heritage Institute of Technology)",
        duration: "Post Graduation",
        status: "Completed",
    },
    {
        degree: "B.Sc Computer Science (Hons.)",
        institution: "CU (Calcutta University)",
        duration: "Graduation",
        status: "Completed",
    },
];

export const certificationData = [
    {
        title: "Post Graduate Certification",
        issuer: "Academic Board & Institution Evaluated",
        date: "Verified Credential",
    },
    {
        title: "Graduate Academic Degree Certification",
        issuer: "University Affiliation Standards",
        date: "Verified Credential",
    },
];

export const details = [
    {
        id: "skills",
        content: (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 gap-3.5"
            >
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-3 p-3 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-300 group"
                    >
                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-zinc-900">{skill.name}</p>
                            <p className="text-2xs text-zinc-400 font-semibold tracking-wider uppercase">{skill.type}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        ),
    },
    {
        id: "education",
        content: (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-blue-100 transition-all duration-300"
                    >
                        {/* Timeline element vertical pipe */}
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                            <GraduationIcon />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                <h4 className="text-base font-bold text-zinc-900">{edu.degree}</h4>
                                <span className="inline-flex self-start sm:self-auto items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                                    {edu.duration}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-zinc-600">{edu.institution}</p>
                            <p className="text-xs text-emerald-600 font-semibold mt-1 inline-flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                {edu.status}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        ),
    },
    {
        id: "certifications",
        content: (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                {certificationData.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-indigo-100 transition-all duration-300"
                    >
                        <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                            <AwardIcon />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-zinc-900 mb-1">{cert.title}</h4>
                            <p className="text-xs text-zinc-500 font-medium mb-1">{cert.issuer}</p>
                            <span className="text-2xs text-amber-600 bg-amber-50 font-bold px-2 py-0.5 rounded-md">
                                {cert.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        ),
    },
];