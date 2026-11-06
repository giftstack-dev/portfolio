import React, { useState, useMemo } from "react";
import { projects, Project, ProjectCategory } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Sparkles, Filter } from "lucide-react";

type FilterOption = "All" | ProjectCategory;

const CATEGORIES: FilterOption[] = ["All", "Full-stack", "Backend", "Frontend", "DevOps"];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterOption, number> = {
      All: projects.length,
      "Full-stack": 0,
      Backend: 0,
      Frontend: 0,
      DevOps: 0,
    };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects based on selected chip
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Separate into featured and others
  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );
  const otherProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-[var(--border)]"
      aria-label="Projects and Engineering Work"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filters */}
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
              <span>02 / PROOF OF WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
              Featured Systems & Applications
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1.5 max-w-xl">
              Real projects showing safe money handling, automated release pipelines, and responsive frontend architectures.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className="sr-only">Filter projects by category</span>
            <div className="p-1 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center gap-1">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-[var(--accent)] text-white shadow-xs font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[var(--surface)] text-[var(--text-secondary)]"
                      }`}
                    >
                      {categoryCounts[cat]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                Featured Flagships
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featuredView={true}
                  onOpenCaseStudy={setActiveCaseStudy}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <div className="flex items-center gap-2 mb-6 pt-4 border-t border-[var(--border)]/60">
                <Filter className="w-4 h-4 text-[var(--text-secondary)]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                  Additional Projects & Client Work
                </h3>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featuredView={false}
                  onOpenCaseStudy={setActiveCaseStudy}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[var(--surface)] rounded-2xl border border-[var(--border)]">
            <p className="text-[var(--text-secondary)] text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Accessible Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
