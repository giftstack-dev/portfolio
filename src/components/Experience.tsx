import React from "react";
import { siteData } from "../data/siteData";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-t border-[var(--border)]"
      aria-label="Experience and Education Timeline"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            <span>04 / BACKGROUND & TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1.5">
            Hands-on software development in team environments, client freelance delivery, and academic foundation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[var(--border)] ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {/* Work Experiences */}
          {siteData.experiences.map((exp, idx) => (
            <div key={exp.id} className="scroll-reveal relative">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[35px] md:-left-[51px] top-1 w-9 h-9 rounded-full bg-[var(--surface)] border-2 flex items-center justify-center shadow-md ${
                  idx === 0
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--text-secondary)]"
                }`}
              >
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {exp.role}
                    <span className="text-[var(--accent)] font-semibold"> · {exp.company}</span>
                  </h3>
                  {exp.period && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] bg-[var(--surface-2)] px-2.5 py-1 rounded-md border border-[var(--border)] w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                  )}
                </div>

                {exp.neutralLine && (
                  <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.neutralLine}
                  </p>
                )}

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="mt-3.5 space-y-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Education Item: SDU */}
          <div className="scroll-reveal relative">
            <div className="absolute -left-[35px] md:-left-[51px] top-1 w-9 h-9 rounded-full bg-[var(--surface)] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-md">
              <GraduationCap className="w-4 h-4" />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--surface)] to-[var(--surface-2)] border border-[var(--border)] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {siteData.education.degree}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent-2)]">
                    {siteData.education.institution}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] bg-[var(--surface)] px-2.5 py-1 rounded-md border border-[var(--border)] w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{siteData.education.period}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                  <span>{siteData.education.location}</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Honors: {siteData.education.honors}</span>
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border)] text-sm">
                <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block mb-1">
                  Final-year project:
                </span>
                <p className="text-[var(--text)] font-medium">
                  {siteData.education.finalProject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
