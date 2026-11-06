export type ProjectCategory = "Full-stack" | "Backend" | "Frontend" | "DevOps";
export type ProjectStatus = "Completed" | "In progress";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  description: string;
  features: string[];
  problem: string;
  solution: string;
  learned: string;
  repoUrl: string;
  liveUrl: string;
  featured: boolean;
  typeNote?: string;
}

export const projects: Project[] = [
  {
    id: "vaultpay",
    title: "VaultPay (Vaultpay Core)",
    tagline: "A simulated bank that moves money safely.",
    category: "Backend",
    status: "Completed",
    tags: ["FastAPI", "Python", "React", "TypeScript", "SQLAlchemy", "pytest"],
    description:
      "A demo banking system that shows how a bank keeps money correct: a double-entry ledger, safe transfers, limits, and an audit trail. It runs as a simulation, with no real money.",
    features: [
      "Money stored as integer kobo to avoid rounding errors",
      "Double-entry ledger where every transfer posts balanced debits and credits",
      "Idempotency keys so a repeated request never moves money twice",
      "Daily and per-transaction limits with simple risk checks and an approval queue",
      "Reversals and an audit log chained with hashes",
      "Reconciliation checks",
    ],
    problem:
      "Money systems fail through rounding errors, duplicate requests, and untraceable changes.",
    solution:
      "Ledger-based design, idempotent transfers, and an append-only audit trail.",
    learned:
      "Designing for correctness first makes every other feature easier to trust.",
    repoUrl: "https://github.com/giftstack-dev/VaultPay",
    liveUrl: "",
    featured: true,
  },
  {
    id: "vybe",
    title: "Vybe",
    tagline: "A customizable music player with synced lyrics.",
    category: "Frontend",
    status: "Completed",
    tags: ["React", "TypeScript", "Tailwind CSS", "Web Audio API", "IndexedDB"],
    description:
      "A music player that streams independent artists and plays local files, with lyrics fetched automatically and an interface users can customize.",
    features: [
      "Streaming from the Audius catalog plus local file support",
      "Automatic synced lyrics with a cache and manual edit",
      "Theme, layout, and player-style customization",
      "Equalizer, crossfade, sleep timer, and playback speed",
      "Works offline for local and downloaded tracks",
    ],
    problem:
      "Major music apps barely let users customize the experience and often lack lyrics for local music.",
    solution:
      "A customizable player with a lyrics pipeline that falls back gracefully.",
    learned:
      "Keeping audio effects, lyrics sync, and crossfade working together taught me to design one shared audio engine.",
    repoUrl: "https://github.com/giftstack-dev/Vybe",
    liveUrl: "",
    featured: true,
  },
  {
    id: "ci-cd-pipeline-showcase",
    title: "CI/CD Pipeline Showcase",
    tagline: "A full pipeline for a FastAPI and React app.",
    category: "DevOps",
    // NOTE: Change status to "Completed" once all workflows are green
    status: "In progress",
    tags: [
      "GitHub Actions",
      "Docker",
      "FastAPI",
      "React",
      "pytest",
      "Trivy",
      "CodeQL",
    ],
    description:
      "A repository that demonstrates an automated pipeline: every pull request is linted, tested, and security-scanned, and every merge builds a container image and deploys.",
    features: [
      "Lint and test matrix on two Python versions with a coverage gate",
      "CodeQL, dependency, and secret scanning",
      "Docker image published to GitHub Container Registry",
      "Staging deploy and production deploy with manual approval",
      "Tagged releases and a rollback workflow",
      "Dependabot dependency updates",
    ],
    problem: "Manual testing and releases are slow and error-prone.",
    solution:
      "A pipeline that checks every change automatically and ships only when the checks pass.",
    learned:
      "Small, fast, well-named checks make a pipeline easy to trust and debug.",
    repoUrl: "https://github.com/giftstack-dev/ci-cd-pipeline-showcase",
    liveUrl: "",
    featured: true,
  },
  {
    id: "frontdoor-templates",
    title: "Frontdoor Templates",
    tagline: "Landing page templates for Nigerian small businesses.",
    category: "Frontend",
    status: "Completed",
    tags: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    description:
      "A gallery of eight ready-made landing page templates (fashion, beauty, food, church and events, real estate, tech, portfolio, fitness) that visitors can preview, customize, and download as a hosting-ready website.",
    features: [
      "Eight distinct templates tailored for commercial niches",
      "Live preview with phone, tablet, and desktop views",
      "Customizer for business details, colors, fonts, and content",
      "Download as a ZIP with a plain-English guide",
      "WhatsApp booking and contact built into every template",
    ],
    problem:
      "Small businesses need a professional page fast and cheaply.",
    solution:
      "Customizable templates that produce a standalone page.",
    learned:
      "Making content visible by default, with animation as an enhancement, keeps pages reliable.",
    // NOTE: replace with the exact repository link when published
    repoUrl: "https://github.com/giftstack-dev",
    liveUrl: "",
    featured: false,
  },
  {
    id: "sarahskye-collection",
    title: "Sarahskye Collection",
    tagline: "A website for a fashion designer.",
    category: "Frontend",
    status: "Completed",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    typeNote: "Freelance client project",
    description:
      "A website for a fashion designer that shows her work in a filterable gallery and lets clients book a fitting or call her directly.",
    features: [
      "Filterable lookbook with lightbox",
      "Booking form that sends a pre-filled WhatsApp message",
      "Click-to-call and WhatsApp contact",
      "Fixed navigation bar",
      "Scroll animations",
    ],
    problem:
      "Her clients booked through scattered chats and had no place to see her work.",
    solution:
      "One site with a gallery and a simple booking flow.",
    learned:
      "Working for a real client means decisions are driven by what her customers actually need.",
    // NOTE: replace with the exact repository link when published
    repoUrl: "https://github.com/giftstack-dev",
    liveUrl: "",
    featured: false,
  },
  {
    id: "sdu-portal",
    title: "SDU Academic Management Portal",
    tagline: "My final-year project.",
    category: "Full-stack",
    status: "Completed",
    tags: ["React.js"],
    typeNote: "Degree dissertation project",
    description:
      "An academic management portal built for my degree dissertation, with a large course dataset and documented design.",
    features: [
      "Built with React.js and browser storage",
      "A dataset of 997 courses",
      "Interactive mockups used for documentation",
    ],
    problem:
      "Course management and registration records needed a clean, responsive web interface.",
    solution:
      "An interactive portal architecture with offline browser storage support.",
    learned:
      "Handling large datasets efficiently on the client demands disciplined component state boundaries.",
    repoUrl: "",
    liveUrl: "",
    featured: false,
  },
];
