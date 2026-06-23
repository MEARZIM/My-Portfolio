// ==========================================
// TYPES & DATA STRUCTURE
// ==========================================
export interface Experience {
    role: string;
    company: string;
    type: string;
    period: string;
    location: string;
    highlights: string[];
    metrics?: string[]; // Callout pills for high-impact achievements
}

export const experiences: Experience[] = [
    {
        role: "Junior Software Engineer",
        company: "HitBox Collectibles",
        type: "Full-time",
        period: "Jun 2026 - Present",
        location: "Remote",
        metrics: ["AWS Cloud", "Backend Developer", "App Developer"],
        highlights: [
            "Scaling robust backend services and RESTful APIs, ensuring high availability and seamless data flow across full-stack applications.",
            "Leveraging AWS cloud infrastructure to deploy, monitor, and optimize serverless workflows, cloud storage, and distributed computing services.",
            "Integrating front-end interfaces with complex backend logic to deliver high-performance, scale-ready digital collectibles platforms."
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "A2mation Technology Solution Pvt Ltd.",
        type: "Full-time",
        period: "Jan 2026 - Jun 2026",
        location: "On-site",
        metrics: ["Redis Caching", "REST APIs", "100K+ req/min"],
        highlights: [
            "Optimized backend architecture, drastically reducing critical API response times from 400ms → 80ms using strategic Redis caching layers and fine-tuned database indexing.",
            "Architected and deployed high-throughput REST APIs engineered to reliably handle spikes over 100K+ requests/min with minimal overhead.",
            "Accelerated internal dashboard loading states by parallelizing independent API requests and caching pre-aggregated metrics collections.",
            "Decoupled heavy processing tasks from the primary request lifecycle by introducing robust asynchronous background workers and persistent job queues."
        ]
    },
    {
        role: "Junior Developer",
        company: "Stark Consulting and Software Services Pvt Ltd.",
        type: "Full-time",
        period: "Sep 2024 - Feb 2025",
        location: "Remote",
        metrics: ["Laravel", "Performance +50%"],
        highlights: [
            "Engineered and maintained feature sets for enterprise web applications leveraging Laravel, tightening core database normalization and execution speeds.",
            "Partnered side-by-side with product managers and UI/UX designers to translate wireframes into pixel-perfect, highly intuitive interface systems.",
            "Enhanced overall platform web performance metrics by 50%, utilizing asset optimization alongside structured application layer caching mechanisms."
        ]
    }
];