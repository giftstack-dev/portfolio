import React, { useEffect, useRef } from "react";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  Wrench,
  Tag,
} from "lucide-react";
import { Project } from "../data/projects";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Save previous active element for accessibility return focus
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button inside modal
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>("button");
      closeBtn?.focus();
    }, 50);

    // Escape key listener & focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)] bg-[var(--surface-2)]/50 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
                {project.category}
              </span>
              <span className="text-[var(--border)]">·</span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  project.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "Completed" ? "bg-emerald-400" : "bg-amber-400 animate-ping"
                  }`}
                />
                <span>{project.status}</span>
              </span>
              {project.typeNote && (
                <span className="text-xs text-[var(--text-secondary)] font-mono">
                  ({project.typeNote})
                </span>
              )}
            </div>
            <h3
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-[var(--text)]"
            >
              {project.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)] shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 select-text">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              Project Overview
            </h4>
            <p className="text-base text-[var(--text)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
              <div className="flex items-center gap-2 text-rose-400 mb-2 font-semibold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
              <div className="flex items-center gap-2 text-[var(--accent-2)] mb-2 font-semibold text-sm">
                <Wrench className="w-4 h-4 shrink-0" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--success)]" />
              <span>Key Features & Architecture</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--surface-2)]/50 border border-[var(--border)]/70 flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-[var(--surface-2)] to-[var(--surface)] border-l-4 border-[var(--accent)] border-y border-r border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--accent)] mb-1 font-semibold text-xs font-mono uppercase">
              <Lightbulb className="w-4 h-4" />
              <span>What I Learned</span>
            </div>
            <p className="text-base italic text-[var(--text)] font-medium">
              "{project.learned}"
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-semibold flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 border-t border-[var(--border)] bg-[var(--surface-2)]/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all border border-[var(--border)] hover:border-transparent min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition-all min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)] border border-[var(--border)] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
