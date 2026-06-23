export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[]; // Category tabs ("All", "Fullstack", "Frontend")
  gitUrl: string;
  previewUrl?: string;
  tags?: string[]; // Specific technology pill highlights
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "LeetCode Clone",
    description: "A comprehensive developer practice platform replicating core LeetCode modules. Features code compilation environments, sandbox workspaces, and state synchronization.",
    image: "/images/projectsImages/Leet-Code-Clone.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/MEARZIM/LeetCode-Clone?tab=readme-ov-file",
    // previewUrl: "/",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Monaco Editor"]
  },
  {
    id: 3,
    title: "Forumly",
    description: "A modern, highly interactive community forum platform inspired by Reddit. Supports nested commenting, post voting, secure authentication, and sub-community creation hubs.",
    image: "/images/projectsImages/forumly.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/MEARZIM/forumly",
    previewUrl: "https://forumly-neon.vercel.app/",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"]
  },
  {
    id: 4,
    title: "Ocean.Ai",
    description: "An AI-powered semantic search and document intelligence SaaS engine. Leveraging natural language processing pipelines and vector embeddings to extract actionable marine insights.",
    image: "/images/projectsImages/oceanai.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/MEARZIM/Ocean.Ai",
    // previewUrl: "/",
    tags: ["Next.js", "OpenAI GPT-4", "Vector Database", "TypeScript"]
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "A fully functional e-commerce web application featuring client-side routing, custom shopping carts, and electronic goods catalogs.",
    image: "/images/projectsImages/E-com.png",
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/MEARZIM/Ecommerce_website_on_electronic_goods?tab=readme-ov-file",
    // previewUrl: "/",
    tags: ["React", "CSS3", "Redux", "Node.js"]
  },
  {
    id: 5,
    title: "Travel Planner",
    description: "An immersive travel-booking dashboard and landing page. Features fluid maps integration, custom booking itineraries, and animated geographic carousels.",
    image: "/images/projectsImages/travel-website.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://travel-website-ochre-nine.vercel.app/",
    previewUrl: "https://travel-website-ochre-nine.vercel.app/",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Next.Js"]
  },
  {
    id: 6,
    title: "Amazon landing page",
    description: "A responsive structural layout clone recreating Amazon's landing grid, responsive sidebars, custom asset sizing, and interactive checkout previews.",
    image: "/images/projectsImages/amaon-landing-page.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/MEARZIM/Amazonclone",
    // previewUrl: "/",
    tags: ["HTML5", "CSS Grid", "Flexbox", "JavaScript"]
  },
];