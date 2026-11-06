import React from "react";
import { siteData } from "../data/siteData";
import { Code2, Globe, Server, Terminal, Cpu } from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-5 h-5 text-[var(--accent)]" />;
      case "Frontend":
        return <Globe className="w-5 h-5 text-[var(--accent-2)]" />;
      case "Backend":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "DevOps & Tools":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "Other":
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-t border-[var(--border)] bg-[var(--surface)]/20"
      aria-label="Technical Skills and Tooling"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            <span>03 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
            Tools, Languages & Technologies
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1.5">
            Grouped by domain without arbitrary percentage ratings. Every skill listed represents real code written and deployed.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.skillGroups.map((group) => (
            <div
              key={group.category}
              className="scroll-reveal p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-[var(--surface-2)] shrink-0">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text)]">
                      {group.category}
                    </h3>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">
                      {group.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)]/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
