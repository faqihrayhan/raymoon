import { ASSETS } from "./assets";

export interface TechItem {
  id: string;
  name: string;
  category: "core" | "infra" | "web3";
  image: string;
  color: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  stats?: { label: string; value: string }[];
  link?: string;
  github?: string;
}

export const PROFILE_DATA = {
  name: "Rayhan",
  handle: "raymoon",
  headline: "Autonomous AI Agent · Smart Contracts · Automation · Web Developer",
  subheadline: "Shipping autonomous AI agents executing fully on-chain on Solana, deploying & auditing smart contracts with Foundry, and architecting resilient Python automation systems.",
  status: "Available for Projects & Collaboration",
  socials: {
    github: "https://github.com/faqihrayhan",
    x: "https://x.com/kyleenpl",
    linkedin: "https://linkedin.com/in/faqihrayhan",
    email: "faqihrai02@gmail.com",
  },
  stats: {
    githubStatsUrl: "https://github-readme-stats-faqihrayhan.vercel.app/api?username=faqihrayhan&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&icon_color=00d4ff&text_color=c9d1d9&hide_rank=true&hide_title=true",
    topLangsUrl: "https://github-readme-stats-faqihrayhan.vercel.app/api/top-langs/?username=faqihrayhan&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=c9d1d9&hide_title=true",
    streakUrl: "https://github-readme-streak-stats.herokuapp.com/?user=faqihrayhan&theme=dark&hide_border=true&background=00000000&stroke=30363d&ring=00d4ff&fire=ff6b6b&currStreakLabel=ffffff&sideLabels=8b949e&currStreakNum=ffffff&sideNums=c9d1d9",
  },
};

export const TECH_STACK: TechItem[] = [
  {
    id: "python",
    name: "Python",
    category: "core",
    image: ASSETS.tech.python,
    color: "#3776AB",
    description: "Core language for AI agents, automation pipelines & backend engines.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "core",
    image: ASSETS.tech.typescript,
    color: "#3178C6",
    description: "Type-safe web development, full-stack Next.js dApps & SDK integrations.",
  },
  {
    id: "solidity",
    name: "Solidity",
    category: "web3",
    image: ASSETS.tech.solidity,
    color: "#627EEA",
    description: "EVM Smart contracts, ERC20 payment gateways, security & audit.",
  },
  {
    id: "solana",
    name: "Solana",
    category: "web3",
    image: ASSETS.tech.solana,
    color: "#14F195",
    description: "High-throughput on-chain autonomous AI agents and wallet pipelines.",
  },
  {
    id: "foundry",
    name: "Foundry",
    category: "web3",
    image: ASSETS.tech.foundry,
    color: "#F5841F",
    description: "Fast fuzzing, testing & deployment for EVM / Arc testnet contracts.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "infra",
    image: ASSETS.tech.fastapi,
    color: "#009688",
    description: "High-performance async REST APIs and webhook listeners.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "infra",
    image: ASSETS.tech.postgresql,
    color: "#336791",
    description: "Relational database with Supabase RLS and robust indexing.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "infra",
    image: ASSETS.tech.docker,
    color: "#2496ED",
    description: "Containerized deployment for autonomous bots & microservices.",
  },
  {
    id: "linux",
    name: "Linux / WSL",
    category: "infra",
    image: ASSETS.tech.linux,
    color: "#FCC624",
    description: "DevOps, homelab orchestration, daemon services & CLI scripting.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "infra",
    image: ASSETS.tech.git,
    color: "#F05032",
    description: "Version control, CI/CD Actions, repo management & multi-agent PRs.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "solana-agents",
    title: "Autonomous AI Agent on Solana",
    role: "Core Architect & Developer",
    period: "2026 — Present",
    description: "Architected and shipped an autonomous AI agent that executes verifiable on-chain actions on Solana, managing token interactions, dynamic reasoning loops, and wallet security.",
    tags: ["Solana", "Python", "AI Agent", "Web3", "AsyncIO"],
    image: ASSETS.projects.solanaAgents,
    stats: [
      { label: "Execution", value: "100% On-Chain" },
      { label: "Latency", value: "< 400ms" },
    ],
    github: "https://github.com/faqihrayhan",
  },
  {
    id: "arc-contracts",
    title: "Smart Contracts & Foundry Testing (Arc)",
    role: "Smart Contract Engineer",
    period: "2026",
    description: "Built, fuzz-tested, and deployed smart contract systems on Arc Testnet using Foundry. Performed security audits, invariant tests, and gas optimization routines.",
    tags: ["Solidity", "Foundry", "Arc Testnet", "Security Audit"],
    image: ASSETS.projects.arcContracts,
    stats: [
      { label: "Framework", value: "Foundry" },
      { label: "Coverage", value: "98% Test Pass" },
    ],
    github: "https://github.com/faqihrayhan",
  },
  {
    id: "nota-dapp",
    title: "Nota — Web3 Invoice & Accounting dApp",
    role: "Full Stack & Web3 Developer",
    period: "2026",
    description: "Decentralized invoicing and merchant payment settlement dApp with multi-language i18n, Supabase RLS security, dynamic QR payloads, and ERC20 token streams.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "ERC20"],
    image: ASSETS.projects.notaApp,
    stats: [
      { label: "Stack", value: "Next.js + RLS" },
      { label: "Status", value: "Public Repo" },
    ],
    github: "https://github.com/faqihrayhan/nota",
  },
  {
    id: "python-automation",
    title: "Enterprise Automation & Bot Infrastructure",
    role: "Automation Engineer",
    period: "2025 — 2026",
    description: "Engineered scalable Python automation bots, Telegram video streaming processors, and asynchronous workflow schedulers for high-load media operations.",
    tags: ["Python", "FastAPI", "Docker", "Telegram Bot API", "Redis"],
    image: ASSETS.projects.pythonAutomation,
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Throughput", value: "Realtime" },
    ],
    github: "https://github.com/faqihrayhan/telegram-video-bot",
  },
  {
    id: "outpost-ecosystem",
    title: "OUTPOST & Creative SaaS Ecosystem",
    role: "Lead Platform Engineer",
    period: "2026",
    description: "Developed modern web brand portal, SaaS Hub interconnects, and dynamic design token system with glassmorphic visuals and radial orbital architectures.",
    tags: ["Next.js", "Tailwind CSS", "Design Tokens", "Orbital UI"],
    image: ASSETS.projects.outpost,
    stats: [
      { label: "Design", value: "Cosmic Glass" },
      { label: "Routing", value: "App Router" },
    ],
    github: "https://github.com/faqihrayhan/its-outpost",
  },
];
