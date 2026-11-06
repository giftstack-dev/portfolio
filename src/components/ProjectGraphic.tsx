import React, { useState } from "react";
import {
  ShieldCheck,
  Music,
  GitBranch,
  Layout,
  Sparkles,
  BookOpen,
  CheckCircle,
  Play,
  Layers,
} from "lucide-react";
import { Project } from "../data/projects";

interface ProjectGraphicProps {
  project: Project;
  className?: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ project, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageSrc = `/images/projects/${project.id}.png`;

  const renderIllustration = () => {
    switch (project.id) {
      case "vaultpay":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#121923] via-[#101826] to-[#1E1B4B] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Pattern grid */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "radial-gradient(#7C6CFF 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2DD4BF] bg-[#2DD4BF]/10 px-2.5 py-1 rounded-md border border-[#2DD4BF]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEDGER: BALANCED</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">KOBO INT PRECISION</span>
            </div>

            {/* Visual Center: Bank Ledger Card */}
            <div className="relative z-10 bg-[#162030]/90 border border-[#243044] rounded-xl p-3.5 shadow-xl backdrop-blur-sm max-w-sm mx-auto w-full my-auto">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-[#243044]">
                <span className="font-mono text-slate-400">TX #849201 · IDEMPOTENT</span>
                <span className="font-mono text-emerald-400 font-medium">₦1,250,000.00</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                <div className="bg-[#101722] p-2 rounded-lg border border-[#1E293B]">
                  <span className="text-rose-400 block font-semibold">- DEBIT #0182</span>
                  <span className="text-slate-400 text-[10px]">Source Ledger</span>
                </div>
                <div className="bg-[#101722] p-2 rounded-lg border border-[#1E293B]">
                  <span className="text-emerald-400 block font-semibold">+ CREDIT #9942</span>
                  <span className="text-slate-400 text-[10px]">Dest Ledger</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Floating-Point Drift</span>
              </span>
              <span className="text-[#7C6CFF]">SHA-256 Chained</span>
            </div>
          </div>
        );

      case "vybe":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#121923] via-[#1A142A] to-[#2E1065] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C084FC] bg-[#C084FC]/10 px-2.5 py-1 rounded-md border border-[#C084FC]/20">
                <Music className="w-3.5 h-3.5" />
                <span>AUDIO ENGINE</span>
              </span>
              <span className="text-[11px] font-mono text-purple-300">WEBAUDIO + INDEXEDDB</span>
            </div>

            {/* Waveform & Lyrics Card */}
            <div className="relative z-10 bg-[#1A182E]/90 border border-[#3B2D54] rounded-xl p-3.5 shadow-xl max-w-sm mx-auto w-full my-auto">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7C6CFF] to-[#C084FC] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-white truncate">Independent Audio Stream</div>
                  <div className="text-[10px] text-purple-300/80 font-mono">Audius Network · 320kbps</div>
                </div>
              </div>

              {/* Animated/Illustrated Waveform bars */}
              <div className="flex items-end justify-between gap-1 h-7 pt-1 px-1">
                {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 75, 40, 85, 60, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-full rounded-full bg-gradient-to-t from-[#7C6CFF] to-[#2DD4BF] opacity-80"
                  />
                ))}
              </div>

              {/* Synced lyrics row */}
              <div className="mt-2.5 pt-2 border-t border-[#3B2D54] flex items-center justify-between text-[11px]">
                <span className="text-purple-200 italic font-sans truncate">"Synced lines follow the vocal rhythm..."</span>
                <span className="text-[#2DD4BF] font-mono text-[10px] shrink-0 ml-2">01:42</span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Offline Ready</span>
              <span className="text-[#2DD4BF]">Custom Equalizer</span>
            </div>
          </div>
        );

      case "ci-cd-pipeline-showcase":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0F172A] via-[#111E30] to-[#0D242E] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded-md border border-[#34D399]/20">
                <GitBranch className="w-3.5 h-3.5" />
                <span>WORKFLOW: PR-VALIDATION</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">GH ACTIONS · TRIVY</span>
            </div>

            {/* Pipeline Stage Badges */}
            <div className="relative z-10 bg-[#162338]/90 border border-[#24354C] rounded-xl p-3.5 shadow-xl max-w-sm mx-auto w-full my-auto">
              <div className="text-xs font-mono text-slate-300 mb-2 flex items-center justify-between">
                <span>commit <span className="text-[#38BDF8]">f41b9e2</span> on main</span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3" /> passed
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center justify-between px-2 py-1 bg-[#0F172A] rounded border border-[#1E293B]">
                  <span className="text-slate-300">1. Matrix Lint & Pytest (3.11, 3.12)</span>
                  <span className="text-emerald-400">100% OK</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 bg-[#0F172A] rounded border border-[#1E293B]">
                  <span className="text-slate-300">2. CodeQL & Trivy Security Scan</span>
                  <span className="text-emerald-400">0 High</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 bg-[#0F172A] rounded border border-[#1E293B]">
                  <span className="text-slate-300">3. Container Build & GHCR Push</span>
                  <span className="text-emerald-400">Tagged</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Coverage Gate &gt;= 85%</span>
              <span className="text-[#38BDF8]">Staging + Prod Manual Gate</span>
            </div>
          </div>
        );

      case "frontdoor-templates":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#121923] via-[#192231] to-[#1E293B] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-md border border-[#38BDF8]/20">
                <Layout className="w-3.5 h-3.5" />
                <span>TEMPLATE SUITE</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">8 NIGERIAN COMMERCE THEMES</span>
            </div>

            {/* Responsive Viewports Preview Card */}
            <div className="relative z-10 bg-[#1A2436]/90 border border-[#2D3F59] rounded-xl p-3.5 shadow-xl max-w-sm mx-auto w-full my-auto flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-24 rounded-lg border-2 border-slate-600 bg-slate-900 p-1 flex flex-col justify-between shadow-inner">
                  <div className="h-1 w-4 bg-slate-700 rounded mx-auto" />
                  <div className="h-10 bg-[#7C6CFF]/30 rounded-xs" />
                  <div className="h-1.5 w-6 bg-emerald-500 rounded mx-auto" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-36 h-24 rounded-lg border-2 border-slate-600 bg-slate-900 p-1.5 flex flex-col justify-between shadow-inner">
                  <div className="flex justify-between items-center pb-1 border-b border-slate-800">
                    <div className="h-1.5 w-6 bg-slate-600 rounded" />
                    <div className="h-1.5 w-12 bg-[#2DD4BF]/40 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-1 my-auto">
                    <div className="h-8 bg-slate-800 rounded-xs" />
                    <div className="h-8 bg-slate-800 rounded-xs" />
                    <div className="h-8 bg-[#7C6CFF]/40 rounded-xs" />
                  </div>
                  <div className="h-1.5 w-16 bg-slate-700 rounded" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Desktop</span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>One-Click ZIP Export</span>
              <span className="text-[#2DD4BF]">WhatsApp Booking Built-in</span>
            </div>
          </div>
        );

      case "sarahskye-collection":
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#1E1B24] via-[#2A1E2E] to-[#121923] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F472B6] bg-[#F472B6]/10 px-2.5 py-1 rounded-md border border-[#F472B6]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CLIENT SHOWCASE</span>
              </span>
              <span className="text-[11px] font-mono text-pink-300">FASHION BRAND</span>
            </div>

            {/* Lookbook Gallery Mockup */}
            <div className="relative z-10 bg-[#241A29]/90 border border-[#44304E] rounded-xl p-3.5 shadow-xl max-w-sm mx-auto w-full my-auto">
              <div className="text-xs font-medium text-pink-200 mb-2 flex items-center justify-between">
                <span>Sarahskye Collection</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                  WhatsApp Bookings Active
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="aspect-3/4 rounded-md bg-gradient-to-b from-[#4A2D4B] to-[#2B172E] border border-[#683C6A]/40 flex items-end p-1">
                  <span className="text-[8px] font-mono text-pink-200">Fitting #01</span>
                </div>
                <div className="aspect-3/4 rounded-md bg-gradient-to-b from-[#5C324E] to-[#341C30] border border-[#7D416B]/40 flex items-end p-1">
                  <span className="text-[8px] font-mono text-pink-200">Gown #04</span>
                </div>
                <div className="aspect-3/4 rounded-md bg-gradient-to-b from-[#3B2544] to-[#201428] border border-[#52335E]/40 flex items-end p-1">
                  <span className="text-[8px] font-mono text-pink-200">Bespoke</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Filterable Lookbook</span>
              <span className="text-[#F472B6]">Direct WhatsApp Intake</span>
            </div>
          </div>
        );

      case "sdu-portal":
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#121923] via-[#162534] to-[#0F1E28] p-6 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-md border border-[#38BDF8]/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>FINAL-YEAR PROJECT</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">SDU DISSERTATION</span>
            </div>

            {/* Academic Portal Mockup */}
            <div className="relative z-10 bg-[#162738]/90 border border-[#27445F] rounded-xl p-3.5 shadow-xl max-w-sm mx-auto w-full my-auto">
              <div className="flex items-center justify-between text-xs text-slate-200 pb-2 border-b border-[#27445F]">
                <span className="font-semibold">Academic Course Management</span>
                <span className="text-[10px] font-mono text-[#38BDF8]">React.js SPA</span>
              </div>
              <div className="py-2.5 flex items-center justify-around text-center">
                <div>
                  <div className="text-lg font-bold text-white font-mono">997</div>
                  <div className="text-[10px] text-slate-400">Courses Indexed</div>
                </div>
                <div className="w-px h-8 bg-[#27445F]" />
                <div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">100%</div>
                  <div className="text-[10px] text-slate-400">Offline Storage</div>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Southern Delta University</span>
              <span className="text-[#38BDF8]">Browser Storage Architecture</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative w-full aspect-16/10 rounded-t-2xl overflow-hidden bg-[var(--surface-2)] ${className}`}>
      {/* 1. Built-in illustrated graphic (always visible as primary or fallback) */}
      <div className="w-full h-full">{renderIllustration()}</div>

      {/* 2. Optional real screenshot /images/projects/{id}.png loaded via JS listeners */}
      {!hasError && (
        <img
          src={imageSrc}
          alt={`Screenshot preview for ${project.title}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setHasError(true);
            setImageLoaded(false);
          }}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 z-20 ${
            imageLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}
    </div>
  );
};
