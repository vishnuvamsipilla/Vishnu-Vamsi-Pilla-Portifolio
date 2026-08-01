export const NAV: [string, string][] = [
  ["work", "Work"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export const STATS: [string, string, string][] = [
  ["4+", "years shipping", "Full stack, React-first"],
  ["<2s", "storefront load", "Conversion-critical pages"],
  ["2", "modules owned", "Builder + Storefront"],
  ["3", "products delivered", "Before SellersCommerce"],
];

export type Project = {
  name: string;
  kind: string;
  body: string;
  tags: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Troven",
    kind: "Assessments platform",
    body: "Educators create and run assessments, students sit them, admins oversee it all. Live in production.",
    tags: ["React", "Next.js", "Redux"],
    url: "https://www.troven.in/",
  },
  {
    name: "Koneqto",
    kind: "Job marketplace",
    body: "Two-sided recruitment product connecting job seekers with employers.",
    tags: ["React", "REST APIs", "Socket.io"],
  },
  {
    name: "Good School",
    kind: "Learning portal",
    body: "Responsive interface for students to find and watch recorded classes.",
    tags: ["Next.js", "SEO", "i18n"],
  },
];

export const SKILLS: [string, string[]][] = [
  ["Frontend", ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Ant Design"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"]],
  ["Architecture", ["Module Federation", "Micro-frontends", "Web Workers", "IndexedDB", "Webpack"]],
  ["AI tooling", ["Claude Code", "GitHub Copilot", "RAG", "MCP Servers", "AI Agents"]],
  ["Practices", ["Performance", "Accessibility", "SEO", "Localization", "Analytics"]],
];

export const ROLES = [
  {
    company: "SellersCommerce LLC",
    role: "SDE-1",
    period: "May 2024 — Present",
    now: true,
    points: [
      "Own the Builder and Storefront modules of CommerceEdge end to end",
      "Drove storefront response times under two seconds",
      "Architected micro-frontend boundaries with Module Federation",
      "Ship production features with Claude Code and Copilot in the loop",
    ],
  },
  {
    company: "GSS Informatics",
    role: "Software Developer",
    period: "Mar 2022 — May 2024",
    now: false,
    points: [
      "Led frontend for Troven, Koneqto and Good School",
      "Built REST and CRUD APIs in Node/Express for five months",
    ],
  },
];

export const PROJECT_TYPES = [
  "Full-time role",
  "Freelance project",
  "Short consult",
  "Something else",
];
