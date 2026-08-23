import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faqih Rayhan Fullstack Developer & Web3 Developer",
  description:
    "Portfolio of Rayhan: Shipping autonomous AI agents on Solana, smart contracts on Arc/Foundry, and resilient automation pipelines.",
  keywords: [
    "Rayhan",
    "raymoon",
    "Autonomous AI Agent",
    "Solana",
    "Solidity",
    "Foundry",
    "Python Automation",
    "Web3 Developer",
    "Next.js",
  ],
  authors: [{ name: "Rayhan", url: "https://github.com/faqihrayhan" }],
  openGraph: {
    title: "Rayhan (raymoon) — Portfolio",
    description:
      "Autonomous AI Agent, Smart Contracts & Automation System Architect.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060813] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Background ambient particle/glow grid */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
