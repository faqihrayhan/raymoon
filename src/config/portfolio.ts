export interface TechItem {
  id: string;
  name: string;
  category: "core" | "infra" | "web3";
  iconType: string;
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
  subheadline: "Shipping autonomous AI agents executing fully on-chain on Solana, deploying & testing smart contracts on Arc testnet with Foundry, and building resilient automation systems.",
  about: "I'm a developer focused on autonomous AI agents, on-chain execution on Solana, smart contract testing via Foundry, and high-performance Python automation pipelines. I build modular web applications and developer tools with meticulous engineering standards.",
  socials: {
    github: "https://github.com/faqihrayhan",
    x: "https://x.com/kyleenpl",
    linkedin: "https://linkedin.com/in/faqihrayhan",
    email: "faqihrai02@gmail.com",
  },
};

export const TECH_STACK: TechItem[] = [
  {
    id: "python",
    name: "Python",
    category: "core",
    iconType: "python",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    description: "Core language for AI agents, automation pipelines, and async backend daemons.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "core",
    iconType: "typescript",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    description: "Strictly typed web development, Next.js dApp architectures, and robust SDK integrations.",
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "web3",
    iconType: "solidity",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    color: "#627EEA",
    description: "EVM Smart contracts, ERC20 tokens, custom security logic, and testing.",
  },
  {
    id: "solana",
    name: "Solana",
    category: "web3",
    iconType: "solana",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solana/solana-original.svg",
    color: "#14F195",
    description: "High-throughput on-chain autonomous AI agents and automated transaction pipelines.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "core",
    iconType: "nodejs",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    description: "Server-side JavaScript runtime for API services, microservices, and toolchains.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "infra",
    iconType: "fastapi",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "#009688",
    description: "High-performance asynchronous Python REST APIs and webhook processing engines.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "infra",
    iconType: "postgresql",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#4169E1",
    description: "Relational database with Supabase RLS security policies and structured indexing.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "infra",
    iconType: "docker",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
    description: "Isolated containerization for autonomous bots, background daemons, and microservices.",
  },
  {
    id: "git",
    name: "Git",
    category: "infra",
    iconType: "git",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    description: "Version control, branching workflows, CI/CD automation, and release management.",
  },
  {
    id: "linux",
    name: "Linux / WSL",
    category: "infra",
    iconType: "linux",
    deviconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624",
    description: "Homelab administration, system services, shell tooling, and workflow scripts.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "autonomous-ai-solana",
    role: "Autonomous AI Agent Architect",
    company: "Solana Ecosystem",
    period: "2026 — Present",
    description: "Architecting and deploying autonomous AI agents that run verifiable reasoning loops and execute on-chain transactions directly on Solana.",
    highlights: [
      "Built resilient asynchronous execution cycles with sub-second latency.",
      "Integrated autonomous wallet management with strict security guardrails.",
      "Automated on-chain event monitoring and reactive trade/interaction logic."
    ],
    tags: ["Solana", "Python", "Autonomous Agents", "AsyncIO", "Web3"],
  },
  {
    id: "smart-contracts-arc",
    role: "Smart Contract Engineer",
    company: "Arc Testnet & Foundry",
    period: "2026",
    description: "Developing, testing, and auditing smart contracts on Arc Testnet using the Foundry framework with rigorous invariant tests.",
    highlights: [
      "Wrote comprehensive unit and fuzz test suites with >95% coverage.",
      "Performed gas profiling and contract optimization.",
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
    role: "Web & dApp Developer",
    company: "Client & Open Source Projects",
    period: "2024 — Present",
    description: "Building modern responsive web applications, decentralized accounting portals, and branded SaaS platforms.",
    highlights: [
      "Shipped Nota dApp (Web3 invoice accounting with Next.js, i18n, Supabase RLS).",
      "Delivered custom Next.js web applications with clean design systems.",
      "Engineered type-safe API layers and internationalization architectures."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "i18n"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "solana-agents",
    title: "Autonomous AI Agent on Solana",
    category: "AI & On-Chain Web3",
    description: "Verifiable autonomous agent executing on-chain transactions on Solana with asynchronous runtime loops and real-time telemetry.",
    tags: ["Solana", "Python", "AI Agent", "AsyncIO"],
    image: "/images/projects/solana-agents.png",
    stats: [
      { label: "Execution", value: "100% On-Chain" },
      { label: "Network", value: "Solana Mainnet/Devnet" },
    ],
    github: "https://github.com/faqihrayhan",
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
    id: "nota-dapp",
    title: "Nota — Web3 Invoice & Accounting dApp",
    category: "Full Stack dApp",
    description: "Decentralized invoicing and merchant settlement dApp with multi-language i18n, Supabase RLS, dynamic QR payloads, and ERC20 token settlement.",
    tags: ["Next.js", "TypeScript", "Supabase RLS", "ERC20"],
    image: "/images/projects/nota-app.png",
    stats: [
      { label: "Security", value: "Supabase RLS" },
      { label: "Type-Safety", value: "100% Strict TS" },
    ],
    github: "https://github.com/faqihrayhan/nota",
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
    category: "Web Engineering",
    description: "Creative technology brand portal and SaaS interconnect hub built with Next.js App Router, design tokens, and modular components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Design Tokens"],
    image: "/images/projects/outpost.png",
    stats: [
      { label: "Architecture", value: "App Router" },
      { label: "Status", value: "Production" },
    ],
    github: "https://github.com/faqihrayhan/its-outpost",
  },
];
