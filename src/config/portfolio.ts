export interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  deviconUrl: string;
  color: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  stats?: { label: string; value: string }[];
  github?: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const PROFILE_DATA = {
  name: "Rayhan",
  handle: "raymoon",
  headline: "Autonomous AI Agent · Smart Contracts · Automation · Web Developer",
  subheadline: "Shipping autonomous AI agents, deploying & testing smart contracts on Arc testnet with Foundry, and building resilient fullstack web and automation systems.",
  about: "I'm a developer and designer passionate about building decentralized applications, autonomous AI workflows, robust web platforms, and refined user interfaces.",
  socials: {
    instagram: "https://www.instagram.com/fqhray_/",
    linkedin: "https://www.linkedin.com/in/mfaqihraihan/",
    x: "https://x.com/kyleenpl",
    github: "https://github.com/faqihrayhan",
    email: "fqhrayhan19@gmail.com",
  },
};

export const TECH_STACK: TechItem[] = [
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
    description: "Semantic markup, modern web accessibility standards, and document structuring.",
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
    description: "Responsive layouts, fluid animations, custom variables, and modern styling techniques.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    description: "Modern ES6+ syntax, asynchronous event loops, and interactive client logic.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    description: "Strictly typed web development, robust API contracts, and scalable architecture.",
  },
  {
    id: "react",
    name: "React JS",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    description: "Component-driven architecture, custom hooks, state management, and virtual DOM rendering.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
    description: "Utility-first CSS framework for rapid, highly customizable design systems.",
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
    description: "UI/UX wireframing, interactive prototyping, component libraries, and design tokens.",
  },
  {
    id: "canva",
    name: "Canva",
    category: "design",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    color: "#00C4CC",
    description: "Digital branding, visual asset creation, creative layout production, and marketing media.",
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    description: "Core language for AI agents, automation pipelines, and async backend services.",
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "backend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    color: "#627EEA",
    description: "EVM Smart contracts, ERC20 tokens, custom security logic, and testing.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    description: "Server-side JavaScript runtime for API services, microservices, and toolchains.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "#009688",
    description: "High-performance asynchronous Python REST APIs and webhook processing engines.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "tools",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
    description: "Relational database with Supabase RLS security policies and structured indexing.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
    description: "Isolated containerization for autonomous bots, background daemons, and microservices.",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    description: "Version control, branching workflows, CI/CD automation, and release management.",
  },
  {
    id: "linux",
    name: "Linux / WSL",
    category: "tools",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624",
    description: "Homelab administration, system services, shell tooling, and workflow scripts.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "autonomous-ai-solana",
    role: "Autonomous AI Agent Architect",
    company: "AI Automation Ecosystem",
    period: "2026 — Present",
    description: "Architecting and deploying autonomous AI agents that run verifiable reasoning loops and execute automated multi-step operations.",
    highlights: [
      "Built resilient asynchronous execution cycles with sub-second response times.",
      "Integrated autonomous task management with strict safety and state guardrails.",
      "Automated real-time event monitoring and reactive interaction logic."
    ],
    tags: ["Python", "Autonomous Agents", "AsyncIO", "Automation", "AI"],
  },
  {
    id: "smart-contracts-arc",
    role: "Smart Contract Engineer",
    company: "Arc Testnet & Foundry",
    period: "2026",
    description: "Developing, testing, and auditing smart contracts on Arc Testnet using the Foundry framework with rigorous invariant tests.",
    highlights: [
      "Wrote comprehensive unit and fuzz test suites with >95% coverage.",
      "Performed gas profiling and contract optimization routines.",
      "Deployed and verified contracts on Arc Testnet."
    ],
    tags: ["Solidity", "Foundry", "Arc Testnet", "Security Audit", "EVM"],
  },
  {
    id: "automation-infrastructure",
    role: "Automation & Infrastructure Developer",
    company: "Personal Homelab & Operations",
    period: "2025 — 2026",
    description: "Engineered scalable Python automation systems, background process runners, and Telegram streaming bots.",
    highlights: [
      "Designed event-driven bot architectures with 99.9% uptime on WSL homelab.",
      "Created automated media transcoding and video dispatch pipelines.",
      "Implemented modular task queues and cron watchers."
    ],
    tags: ["Python", "FastAPI", "Docker", "Telegram API", "Linux"],
  },
  {
    id: "fullstack-web3",
    role: "Web & Frontend Developer",
    company: "Client & Open Source Projects",
    period: "2024 — Present",
    description: "Building modern responsive web applications, accounting portals, and branded SaaS platforms with precision UI/UX design.",
    highlights: [
      "Shipped Nota dApp (Web3 invoice accounting with Next.js, i18n, Supabase RLS).",
      "Delivered custom Next.js web applications with clean design systems in Figma & Canva.",
      "Engineered type-safe API layers and internationalization architectures."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Canva"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "nota-dapp",
    title: "Nota — Web3 Invoice & Accounting dApp",
    category: "Full Stack dApp",
    description: "Decentralized invoicing and merchant settlement dApp with multi-language i18n, Supabase RLS, dynamic QR payloads, and ERC20 token settlement.",
    tags: ["Next.js", "TypeScript", "Supabase RLS", "ERC20", "Tailwind"],
    image: "/images/projects/nota-app.png",
    stats: [
      { label: "Security", value: "Supabase RLS" },
      { label: "Type-Safety", value: "100% Strict TS" },
    ],
    github: "https://github.com/faqihrayhan/nota",
  },
  {
    id: "arc-contracts",
    title: "Arc Testnet Smart Contracts & Foundry Suite",
    category: "Smart Contracts & Audit",
    description: "Robust EVM smart contract system tested and deployed on Arc Testnet using Foundry fuzzing harnesses and gas optimization protocols.",
    tags: ["Solidity", "Foundry", "Arc Testnet", "EVM"],
    image: "/images/projects/arc-contracts.png",
    stats: [
      { label: "Tooling", value: "Foundry" },
      { label: "Testing", value: "Fuzz & Invariant" },
    ],
    github: "https://github.com/faqihrayhan",
  },
  {
    id: "telegram-video-bot",
    title: "Python Media Streaming & Automation Bot",
    category: "Automation & Daemons",
    description: "High-throughput asynchronous media processing bot utilizing FastAPI, Telegram MTProto API, Docker containerization, and custom queue workers.",
    tags: ["Python", "FastAPI", "Docker", "Telegram API"],
    image: "/images/projects/python-automation.png",
    stats: [
      { label: "Runtime", value: "AsyncIO" },
      { label: "Deployment", value: "Docker / Linux" },
    ],
    github: "https://github.com/faqihrayhan/telegram-video-bot",
  },
  {
    id: "its-outpost",
    title: "OUTPOST Platform & SaaS Hub",
    category: "Web Engineering & Design",
    description: "Creative technology brand portal and SaaS interconnect hub built with Next.js App Router, design tokens, and modular components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Design Tokens"],
    image: "/images/projects/outpost.png",
    stats: [
      { label: "Architecture", value: "App Router" },
      { label: "Status", value: "Production" },
    ],
    github: "https://github.com/faqihrayhan/its-outpost",
  },
];
