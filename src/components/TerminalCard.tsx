import React, { useState, useEffect } from "react";
import { Terminal, Copy, Check } from "lucide-react";

interface CommandStep {
  prompt: string;
  command: string;
  output: string;
}

const COMMANDS: CommandStep[] = [
  {
    prompt: "eseoghene@dev:~$",
    command: "whoami",
    output: "eseoghene — software engineer",
  },
  {
    prompt: "eseoghene@dev:~$",
    command: "cat stack.txt",
    output: "python · fastapi · react · typescript · github actions",
  },
  {
    prompt: "eseoghene@dev:~$",
    command: "echo $STATUS",
    output: "ready to build reliable backend & full-stack systems",
  },
];

export const TerminalCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = COMMANDS[activeStep];
    const fullCommand = current.command;

    if (typedCommand.length < fullCommand.length) {
      // Type out character by character
      timeout = setTimeout(() => {
        setTypedCommand(fullCommand.slice(0, typedCommand.length + 1));
      }, 75);
    } else if (!showOutput) {
      // Small pause before output appears
      timeout = setTimeout(() => {
        setShowOutput(true);
      }, 250);
    } else {
      // Pause on finished command before moving to next step
      timeout = setTimeout(() => {
        if (activeStep < COMMANDS.length - 1) {
          setActiveStep((prev) => prev + 1);
          setTypedCommand("");
          setShowOutput(false);
        } else {
          // Loop back after a longer pause
          setActiveStep(0);
          setTypedCommand("");
          setShowOutput(false);
        }
      }, 3500);
    }

    return () => clearTimeout(timeout);
  }, [typedCommand, showOutput, activeStep]);

  const handleCopy = () => {
    try {
      const text = `Eseoghene Gift-Asisisi | Software Engineer\nStack: Python, FastAPI, React, TypeScript, Java, Docker, CI/CD`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard error
    }
  };

  return (
    <div
      className="w-full max-w-lg rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)]/40"
      aria-label="Interactive developer terminal mockup"
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--surface-2)]/80 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>bash — 80x24</span>
          </span>
        </div>
        <button
          onClick={handleCopy}
          aria-label={copied ? "Copied stack" : "Copy engineer stack"}
          title="Copy stack snippet"
          className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-colors text-xs flex items-center gap-1 cursor-pointer"
        >
          {copied ? (
            <span className="flex items-center gap-1 text-[var(--success)] font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Copied</span>
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm space-y-4 min-h-[220px] select-text">
        {/* Render already executed steps */}
        {COMMANDS.slice(0, activeStep).map((step, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <span className="text-[var(--accent-2)] font-semibold">{step.prompt}</span>
              <span className="text-[var(--text)]">{step.command}</span>
            </div>
            <div className="text-[var(--text)] pl-3 border-l-2 border-[var(--accent)]/50 text-xs sm:text-sm font-sans sm:font-mono">
              {step.output}
            </div>
          </div>
        ))}

        {/* Current Active Step */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[var(--text-secondary)] flex-wrap">
            <span className="text-[var(--accent-2)] font-semibold">
              {COMMANDS[activeStep].prompt}
            </span>
            <span className="text-[var(--text)] font-mono">
              {typedCommand}
              <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-[var(--accent)] animate-pulse" />
            </span>
          </div>

          {showOutput && (
            <div className="text-[var(--text)] pl-3 border-l-2 border-[var(--accent)]/50 text-xs sm:text-sm font-sans sm:font-mono animate-in fade-in duration-150">
              {COMMANDS[activeStep].output}
            </div>
          )}
        </div>

        {/* Static accessibility / noscript preview so crawlers & readers get the whole content */}
        <noscript>
          <div className="text-[var(--text-secondary)] text-xs mt-4">
            <p>$ whoami</p>
            <p className="text-[var(--text)]">eseoghene — software engineer</p>
            <p>$ stack</p>
            <p className="text-[var(--text)]">python · fastapi · react · typescript · github actions</p>
          </div>
        </noscript>
      </div>

      {/* Terminal Status bar */}
      <div className="px-4 py-1.5 bg-[var(--surface-2)]/60 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-ping" />
          <span>idle</span>
        </span>
        <span>UTF-8 · main</span>
      </div>
    </div>
  );
};
