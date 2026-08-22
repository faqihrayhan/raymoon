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
  headline: "Fullstack Developer · Web3 Developer",
  subheadline: "Crafting modern full-stack web applications, decentralized protocols, smart contracts, and responsive digital interfaces with rigorous end-to-end engineering.",
  about: "I'm a Fullstack & Web3 Developer specializing in building modern web applications, scalable APIs, smart contracts, and refined UI/UX design systems.",
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
    description: "Core language for automation pipelines, scripts, and async backend services.",
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
    description: "Isolated containerization for background daemons, microservices, and deployments.",
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
    id: "fullstack-web-eng",
    role: "Fullstack Developer",
    company: "Freelance & Open Source",
    period: "2024 — Present",
    description: "Developing modern full-stack web applications, scalable backend APIs, responsive frontends with Next.js/React, and custom UI design systems.",
    highlights: [
      "Built performant web platforms with type-safe APIs and internationalization (i18n).",
      "Designed clean UI/UX design systems and component libraries in Figma & Canva.",
      "Delivered responsive web interfaces optimized for fast loading and mobile experience."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma"],
  },
  {
    id: "web3-smart-contracts",
    role: "Web3 Developer",
    company: "Web3 Ecosystem",
    period: "2025 — Present",
    description: "Engineering decentralized dApps, EVM smart contracts, and Web3 integrations with rigorous testing and secure backend architectures.",
    highlights: [
      "Built Nota dApp — Web3 invoice accounting with Supabase RLS and token settlements.",
      "Developed and fuzz-tested EVM smart contracts on testnets using Foundry.",
      "Integrated decentralized wallets, QR payment payloads, and smart contract ABIs."
    ],
    tags: ["Solidity", "Foundry", "Web3", "Next.js", "Supabase RLS", "EVM"],
  },
  {
    id: "python-backend-automation",
    role: "Backend & Automation Developer",
    company: "Homelab & Internal Tools",
    period: "2025 — 2026",
    description: "Building asynchronous backend services, Python automation scripts, Dockerized daemons, and bot integrations.",
    highlights: [
      "Engineered async APIs and Telegram bots with high uptime on Linux homelab.",
      "Automated content workflows, data processing, and background schedulers.",
      "Deployed containerized services with Docker and continuous workflows."
    ],
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "Linux"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "nota-dapp",
    title: "Nota — Web3 Invoice & Accounting dApp",
    category: "Web3 & Fullstack",
    description: "Decentralized invoicing and merchant settlement dApp with multi-language i18n, Supabase RLS, dynamic QR payloads, and ERC20 token settlement.",
    tags: ["Next.js", "TypeScript", "Supabase RLS", "Solidity", "Tailwind"],
    image: "/images/projects/nota-app.png",
    stats: [
      { label: "Security", value: "Supabase RLS" },
      { label: "Architecture", value: "100% Strict TS" },
    ],
    github: "https://github.com/faqihrayhan/nota",
  },
  {
    id: "arc-contracts",
    title: "Arc Testnet Smart Contracts & Foundry Suite",
    category: "Smart Contracts & Web3",
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
    id: "its-outpost",
    title: "OUTPOST Platform & SaaS Hub",
    category: "Fullstack & UI Design",
    description: "Creative technology brand portal and SaaS interconnect hub built with Next.js App Router, custom design tokens, and modular components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "Canva"],
    image: "/images/projects/outpost.png",
    stats: [
      { label: "Framework", value: "Next.js App Router" },
      { label: "Design", value: "Figma Tokens" },
    ],
    github: "https://github.com/faqihrayhan/its-outpost",
  },
  {
    id: "telegram-video-bot",
    title: "Python Media Automation & API Service",
    category: "Backend & Automation",
    description: "High-throughput asynchronous media processing service utilizing FastAPI, Docker containerization, and custom queue workers.",
    tags: ["Python", "FastAPI", "Docker", "Linux"],
    image: "/images/projects/python-automation.png",
    stats: [
      { label: "Runtime", value: "AsyncIO" },
      { label: "Deployment", value: "Docker / Linux" },
    ],
    github: "https://github.com/faqihrayhan/telegram-video-bot",
  },
];
