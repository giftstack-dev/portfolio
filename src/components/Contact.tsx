import React, { useState } from "react";
import { siteData } from "../data/siteData";
import {
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(siteData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};
    if (!formState.name.trim()) errors.name = "Please enter your name.";
    if (!formState.email.trim() || !formState.email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) {
      errors.message = "Please write a brief message.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Construct mailto link
    const subjectLine = formState.subject.trim()
      ? `[Portfolio Contact] ${formState.subject}`
      : `[Portfolio Inquiry] Message from ${formState.name}`;

    const bodyText = `Hi Eseoghene,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nSent from your portfolio site`;

    const mailtoUrl = `mailto:${siteData.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyText)}`;

    // Open mailto link
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-[var(--border)] bg-[var(--surface)]/40 relative"
      aria-label="Contact Information and Direct Inquiries"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            <span>05 / GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
            Have a role or a project in mind? Let's talk.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2">
            I am currently open to graduate and junior software engineering roles, as well as select freelance projects. Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="scroll-reveal p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="text-sm sm:text-base font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors break-all"
                    >
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copiedEmail ? "Email copied" : "Copy email address"}
                  className="p-2.5 rounded-xl bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors text-xs font-medium flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[var(--success)]" />
                      <span className="text-[var(--success)] text-xs font-semibold">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-emerald-500/50 hover:shadow-md transition-all flex items-center justify-between min-h-[48px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    WhatsApp & Phone
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[var(--text)] group-hover:text-emerald-400 transition-colors">
                    {siteData.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={siteData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-indigo-500/50 hover:shadow-md transition-all flex items-center justify-between min-h-[48px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    LinkedIn
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[var(--text)] group-hover:text-indigo-400 transition-colors">
                    Eseoghene Asisisi
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={siteData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-md transition-all flex items-center justify-between min-h-[48px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">
                    GitHub
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    @giftstack-dev
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Right Column: Pre-filled Mailto Message Form */}
          <div className="lg:col-span-7 scroll-reveal">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                    Pre-fills your inquiry directly to <code className="font-mono text-[var(--accent)]">{siteData.email}</code>
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[var(--accent)]" />
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client is opening with your message prepared. Thank you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-sm text-[var(--text)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors ${
                        formErrors.name
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-[var(--border)]"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-rose-400 mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-sm text-[var(--text)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors ${
                        formErrors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-[var(--border)]"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-rose-400 mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Backend Engineering Role / Freelance Project"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the position, system requirements, or project timeline..."
                    className={`w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border text-sm text-[var(--text)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors resize-none ${
                      formErrors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-[var(--border)]"
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-xs text-rose-400 mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-[var(--accent)] text-white hover:opacity-90 active:scale-[0.99] transition-all shadow-md min-h-[48px] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send message via email</span>
                </button>

                {/* Clear Notice required by specifications */}
                <p className="text-xs text-[var(--text-secondary)] text-center pt-2">
                  Note: Clicking "Send message" opens your device's default email client with your message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
