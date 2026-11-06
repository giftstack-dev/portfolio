import React from "react";
import { Github, ExternalLink, BookOpen, Star } from "lucide-react";
import { Project } from "../data/projects";
import { ProjectGraphic } from "./ProjectGraphic";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  featuredView?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  featuredView = false,
}) => {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
        featuredView ? "lg:col-span-6" : "col-span-1"
      }`}
    >
      {/* Top Media / Screenshot area with layered graphic */}
      <div className="relative">
        <ProjectGraphic project={project} />

        {/* Floating Category & Status Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-30">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-black/60 text-white backdrop-blur-md border border-white/10 shadow-xs">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--accent)]/90 text-white backdrop-blur-md shadow-xs">
                <Star className="w-3 h-3 fill-white" />
                <span className="hidden sm:inline">Featured</span>
              </span>
            )}

            <span
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-md shadow-xs border ${
                project.status === "Completed"
                  ? "bg-black/70 text-emerald-400 border-emerald-500/30"
                  : "bg-black/70 text-amber-400 border-amber-500/30"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "Completed" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                }`}
              />
              <span>{project.status}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm font-medium text-[var(--accent-2)] mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[var(--surface-2)] text-[var(--text-secondary)] border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: GitHub, Live Demo, Case Study (hide empty ones) */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
          {/* Case Study Button - Always Shown */}
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--surface-2)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all border border-[var(--border)] hover:border-transparent min-h-[48px] cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Case study</span>
          </button>

          {/* GitHub Repo Button - Hidden if empty */}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} code on GitHub`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--surface)] text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)] min-h-[48px]"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Code</span>
            </a>
          ) : null}

          {/* Live Demo Button - Hidden if empty */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-opacity min-h-[48px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
