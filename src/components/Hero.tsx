import React from "react";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";
import { TerminalCard } from "./TerminalCard";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, subtext, actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Open to Work Badge */}
            {siteData.showOpenToWork && (
              <div className="hero-animate-1 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--surface-2)] text-[var(--accent)] border border-[var(--border)] shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
                  </span>
                  <span>{siteData.openToWorkBadge}</span>
                </span>
              </div>
            )}

            {/* Engineer Identity & Role Tag */}
            <div className="hero-animate-1 mb-3">
              <span className="text-sm font-semibold tracking-wider uppercase text-[var(--accent)] font-mono">
                {siteData.roleLine}
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="hero-animate-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.12] mb-6">
              {siteData.heroHeadline}
            </h1>

            {/* Hero Subtext */}
            <p className="hero-animate-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
              {siteData.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="hero-animate-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-[var(--accent)] text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-md min-h-[48px] cursor-pointer"
              >
                <span>View my projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)] active:scale-[0.98] transition-all border border-[var(--border)] min-h-[48px] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>Contact me</span>
              </button>
            </div>

            {/* Social Icons & Location */}
            <div className="hero-animate-5 flex items-center gap-4 text-[var(--text-secondary)] pt-4 border-t border-[var(--border)] w-full sm:w-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile of Eseoghene Gift-Asisisi"
                  className="p-2 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)]"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={siteData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile of Eseoghene Gift-Asisisi"
                  className="p-2 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${siteData.email}`}
                  aria-label={`Email ${siteData.email}`}
                  className="p-2 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)]"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className="text-xs text-[var(--text-secondary)] ml-auto sm:ml-4 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-2)]" />
                {siteData.location}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-animate-3">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
};
