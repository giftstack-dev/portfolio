import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, FileDown, Clock } from "lucide-react";
import { siteData } from "../data/siteData";
import { useCvCheck } from "../hooks/useCvCheck";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const { cvAvailable, cvPath } = useCvCheck();

  // Handle active section observer & navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
            : "bg-[var(--bg)]/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg py-1"
          >
            <span className="font-heading text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {siteData.shortBrand}
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--surface-2)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors border border-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* CV Button */}
            {cvAvailable ? (
              <a
                href={cvPath}
                download={siteData.cvFileName}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[var(--surface-2)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all border border-[var(--border)] hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            ) : (
              <span
                title="CV will be published here shortly"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-[var(--surface-2)]/60 text-[var(--text-secondary)] border border-[var(--border)] cursor-not-allowed opacity-75"
              >
                <Clock className="w-3.5 h-3.5 text-[var(--warning)]" />
                <span>CV coming soon</span>
              </span>
            )}
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text)] bg-[var(--surface)] border border-[var(--border)]"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="sm:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                      isActive
                        ? "text-[var(--accent)] bg-[var(--surface-2)] font-semibold"
                        : "text-[var(--text)] hover:bg-[var(--surface-2)]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-2">
              {cvAvailable ? (
                <a
                  href={cvPath}
                  download={siteData.cvFileName}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[var(--accent)] text-white shadow-sm min-h-[48px]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium bg-[var(--surface-2)] text-[var(--text-secondary)] border border-[var(--border)] min-h-[48px]">
                  <Clock className="w-4 h-4 text-[var(--warning)]" />
                  <span>CV coming soon</span>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
