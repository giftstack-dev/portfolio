import React from "react";
import { siteData } from "../data/siteData";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          {/* Brand & Short Line */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-heading text-[var(--text)] tracking-tight">
              {siteData.shortBrand}
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Building reliable backend systems and responsive web applications.
            </p>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={siteData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-[var(--surface-2)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors border border-[var(--border)]"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-[var(--surface-2)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors border border-[var(--border)]"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteData.email}`}
              aria-label="Email Eseoghene"
              className="p-2 rounded-xl bg-[var(--surface-2)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors border border-[var(--border)]"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="inline-flex items-center gap-1.5 p-2 px-3 rounded-xl bg-[var(--surface-2)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all border border-[var(--border)] text-xs font-medium cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Copyright & Location Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
          <p>© {currentYear} {siteData.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed & developed with precision · Delta State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};
