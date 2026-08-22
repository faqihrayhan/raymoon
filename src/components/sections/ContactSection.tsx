"use client";

import React, { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;

    // Direct mailto construction with structured template
    const subject = encodeURIComponent(`Collaboration & Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Rayhan,\n\nSender Name: ${name}\nSender Email: ${senderEmail}\n\nMessage:\n${message}\n\nSent via raymoon portfolio.`
    );

    window.location.href = `mailto:fqhrayhan19@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
      <Reveal direction="up">
        <div className="text-center mb-8">
          <div className="text-xs sm:text-sm font-mono text-orange-500 mb-1.5 uppercase tracking-wider font-semibold">
            // 05. DIRECT TRANSMISSION
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#ededec] mb-2.5">
            Contact Me
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#9ca3af] max-w-md mx-auto leading-relaxed">
            Have an idea for collaboration, full-stack web engineering, or smart contracts? Send a direct message.
          </p>
        </div>
      </Reveal>

      {/* Form Container */}
      <Reveal direction="up" delay={0.15}>
        <div className="cursor-glass p-5 sm:p-8 rounded-2xl border border-white/[0.12] shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] mb-1 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white font-mono text-xs sm:text-sm placeholder:text-[#555861] focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] mb-1 uppercase tracking-wider">
                  Sender Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white font-mono text-xs sm:text-sm placeholder:text-[#555861] focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#9ca3af] mb-1 uppercase tracking-wider">
                Message / Collaboration Details
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your project details, collaboration proposal, or message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white font-mono text-xs sm:text-sm placeholder:text-[#555861] focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2.5 rounded-lg bg-white text-black font-mono text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send to Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
