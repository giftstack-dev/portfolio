export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period?: string;
  bullets?: string[];
  neutralLine?: string;
  isEducation?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors: string;
  finalProject: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SiteData {
  name: string;
  shortBrand: string;
  roleLine: string;
  heroHeadline: string;
  heroSubtext: string;
  location: string;
  showOpenToWork: boolean;
  openToWorkBadge: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  linkedinUrl: string;
  githubUrl: string;
  aboutParagraphs: string[];
  lookingFor: string;
  quickFacts: {
    label: string;
    value: string;
  }[];
  education: EducationItem;
  experiences: ExperienceItem[];
  skillGroups: SkillGroup[];
  cvFileName: string;
  cvPath: string;
}

export const siteData: SiteData = {
  name: "Eseoghene Gift-Asisisi",
  shortBrand: "Eseoghene.",
  roleLine: "Software Engineer · Backend & Full-Stack",
  heroHeadline: "I build reliable backend systems and web apps.",
  heroSubtext:
    "Software Engineering graduate from Nigeria. I work with React, Python (FastAPI), and Java, and I like projects where the details matter: safe money handling, automated pipelines, and clean user experiences.",
  location: "Delta State, Nigeria",
  
  // Set to false if you wish to hide the availability badge in the hero
  showOpenToWork: true,
  openToWorkBadge: "Open to graduate and junior software roles",

  email: "ese.dev13@gmail.com",
  phone: "07060725593",
  whatsappNumber: "2347060725593",
  whatsappLink: "https://wa.me/2347060725593",
  linkedinUrl: "https://www.linkedin.com/in/eseoghene-asisisi-99b378397/",
  githubUrl: "https://github.com/giftstack-dev",

  aboutParagraphs: [
    "I am a Software Engineering graduate of Southern Delta University (SDU), Ozoro, Delta State, with a Second Class Upper (2:1) degree.",
    "I enjoy building things end to end: backend services with FastAPI, front ends with React, and the automation that tests and ships them.",
    "Outside the code, I do freelance web work for small businesses, including a fashion brand's website, and I am currently a Data and AI intern at Schoolville.",
  ],

  lookingFor: "Graduate and junior software roles where I can build and ship real products.",

  quickFacts: [
    { label: "Location", value: "Delta State, Nigeria" },
    { label: "Degree", value: "B.Sc. Software Engineering (2:1)" },
    { label: "Focus", value: "Backend Systems & Web Apps" },
  ],

  education: {
    degree: "B.Sc. Software Engineering",
    institution: "Southern Delta University (SDU), Ozoro",
    location: "Delta State, Nigeria",
    period: "2023 to 2026 (award effective 28 August 2026)",
    honors: "Second Class Upper (2:1)",
    finalProject: "SDU Academic Management Portal, built with React.js.",
  },

  experiences: [
    {
      id: "schoolville",
      role: "Data and AI Intern",
      company: "Schoolville",
      period: "September 2026 to Present",
      bullets: [
        "Contributed to the SCORE 360 project by collecting data and preparing it as structured JSON files.",
        "Worked with HTML, CSS, JavaScript, Java, and Python in a team setting.",
      ],
    },
    {
      id: "cavista",
      role: "Software Engineering Intern",
      company: "Cavista Technologies",
      neutralLine: "Gained hands-on experience in a professional software engineering team.",
    },
    {
      id: "freelance",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "Present",
      bullets: [
        "Build and deliver websites for small businesses, from design to launch.",
      ],
    },
  ],

  skillGroups: [
    {
      category: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      category: "Backend",
      skills: ["FastAPI", "REST APIs", "SQL databases"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git and GitHub", "GitHub Actions (CI/CD)", "Docker"],
    },
    {
      category: "Other",
      skills: ["document automation pipelines", "AI/LLM API integration"],
    },
  ],

  cvFileName: "Eseoghene-Gift-Asisisi-CV.pdf",
  cvPath: "/Eseoghene-Gift-Asisisi-CV.pdf",
};
