import React, { useState } from "react";
import { MapPin, GraduationCap, Code2, Target, CheckCircle2 } from "lucide-react";
import { siteData } from "../data/siteData";

export const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-[var(--border)] bg-[var(--surface)]/30"
      aria-label="About Eseoghene Gift-Asisisi"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
            A software engineer focused on reliable systems.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Avatar & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Photo / Monogram Frame */}
            <div className="scroll-reveal relative p-1 rounded-3xl bg-gradient-to-tr from-[var(--accent)] via-[var(--accent-2)] to-[var(--surface-2)] shadow-lg max-w-sm mx-auto lg:mx-0 w-full aspect-square overflow-hidden group">
              <div className="w-full h-full rounded-[22px] bg-[var(--surface)] overflow-hidden relative flex items-center justify-center">
                {/* Default CSS Monogram Avatar (Always present as primary or backdrop) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[var(--surface-2)] to-[var(--surface)] transition-opacity duration-300 ${
                    imageLoaded ? "opacity-0" : "opacity-100"
                  }`}
                  aria-hidden={imageLoaded}
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shadow-lg mb-4 text-white font-bold text-3xl font-heading tracking-wider">
                    EG
                  </div>
                  <span className="font-heading font-bold text-lg text-[var(--text)]">
                    {siteData.name}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
                    Software Engineer
                  </span>
                </div>

                {/* Optional profile image from /images/profile.jpg */}
                {!imageError && (
                  <img
                    src="/images/profile.jpg"
                    alt="Eseoghene Gift-Asisisi portrait"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      setImageError(true);
                      setImageLoaded(false);
                    }}
                    className={`w-full h-full object-cover object-center transition-opacity duration-500 relative z-10 ${
                      imageLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-[var(--accent)] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-[var(--text)]">
                    {siteData.location}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-[var(--accent)] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    Degree
                  </span>
                  <span className="text-sm font-semibold text-[var(--text)]">
                    {siteData.education.degree} (2:1)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-[var(--accent)] shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    Primary Focus
                  </span>
                  <span className="text-sm font-semibold text-[var(--text)]">
                    FastAPI · React · Pipelines
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraphs & What I'm Looking For */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Bio Paragraphs */}
            <div className="scroll-reveal space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {siteData.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="text-[var(--text-secondary)]">
                  {para}
                </p>
              ))}
            </div>

            {/* Looking For Highlight Card */}
            <div className="scroll-reveal p-6 rounded-2xl bg-gradient-to-r from-[var(--surface-2)] to-[var(--surface)] border border-[var(--border)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-3.5 relative z-10">
                <div className="p-2 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] mt-0.5 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase font-semibold text-[var(--accent)] tracking-wider mb-1">
                    What I'm looking for
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[var(--text)]">
                    "{siteData.lookingFor}"
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="scroll-reveal pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--text)]">
              <div className="flex items-center gap-2 text-sm text-[var(--text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                <span>Double-entry ledger accuracy & safe money</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                <span>Automated linting, testing & security checks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                <span>Clean API design and clear documentation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                <span>Responsive, accessible frontend interfaces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
