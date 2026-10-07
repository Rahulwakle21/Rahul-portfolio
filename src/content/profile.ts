export const hero = {
  eyebrow: "Software Developer · Pune, India",
  headline: ["I build SaaS products", "that hold up beyond the screen."],
  summary:
    "4 years shipping production features with React, TypeScript, Redux Toolkit and Node.js — from requirement calls and component architecture to REST APIs, performance and release.",
  currently: { company: "Celoxis Technologies", product: "Tuskr", since: "Jan 2025" },
};

export type Indicator = { label: string; value: string; detail: string; measured?: boolean };

export const indicators: Indicator[] = [
  { label: "Experience", value: "4 yrs", detail: "SaaS & web applications", measured: true },
  { label: "UI redundancy", value: "~30% less", detail: "via reusable component architecture", measured: true },
  { label: "Architecture", value: "Component-driven", detail: "React · TypeScript · Redux Toolkit" },
  { label: "Performance", value: "Core Web Vitals", detail: "memoization · lazy loading · code splitting" },
  { label: "Backend", value: "REST APIs", detail: "Node.js · Express.js · SQL & NoSQL" },
  { label: "Product", value: "SaaS delivery", detail: "client demos · support · Agile releases" },
];

export type Role = {
  company: string;
  product?: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Celoxis Technologies",
    product: "Tuskr",
    title: "Software Developer",
    period: "Jan 2025 — Present",
    location: "Pune, India",
    current: true,
    summary: "Enterprise SaaS — frontend features, backend APIs and production support.",
    points: [
      "Develop scalable SaaS features with React, TypeScript, Redux Toolkit and Material UI, building reusable components and production-ready workflows.",
      "Applied hooks, memoization, lazy loading, code splitting and render-path optimisation for performance, Core Web Vitals and maintainability — reducing UI code redundancy by ~30%.",
      "Build backend features and REST APIs with Node.js and Express.js; troubleshoot production issues and support tickets.",
      "Redesigned the Tuskr website end-to-end for responsive behaviour, visual consistency and page-load performance.",
      "Involved from requirement gathering and client demos through feature design and release cycles with product, backend and QA.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Node.js", "Express.js"],
  },
  {
    company: "Dreamfuel Technologies",
    product: "Eximfiles",
    title: "Frontend Developer",
    period: "Oct 2022 — Nov 2024",
    location: "Pune, India",
    summary: "Logistics and export-import management platforms.",
    points: [
      "Built responsive React dashboards, reusable UI components and business workflows.",
      "Integrated REST APIs for dynamic data, forms, filters, authentication flows and dashboards.",
      "Worked with designers, backend developers and senior engineers to deliver end-to-end features, resolve UI issues and improve performance.",
      "Git and GitHub based collaboration inside Agile sprints.",
    ],
    stack: ["React", "JavaScript", "REST APIs", "Responsive UI", "Git"],
  },
];

export const education = {
  degree: "M.Com",
  school: "Nagpur University",
  year: "2022",
  grade: "9.3 CGPA",
};

export type SkillGroup = { layer: string; name: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    layer: "01",
    name: "Frontend",
    items: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "React Hooks",
      "HTML5",
      "CSS3",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    layer: "02",
    name: "Backend",
    items: ["Node.js", "Express.js", "RESTful API design", "Microservices", "Integration", "Authentication flows"],
  },
  { layer: "03", name: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    layer: "04",
    name: "Cloud",
    items: ["AWS (EC2, S3, Lambda, Amplify)", "CI/CD", "Monitoring", "Git", "GitHub"],
  },
  {
    layer: "05",
    name: "Practices & Tools",
    items: [
      "System Design",
      "Frontend Architecture",
      "User Onboarding",
      "Agile/Scrum",
      "AI-Assisted Development (Claude, Cursor, ChatGPT, GitHub Copilot)",
    ],
  },
  {
    layer: "06",
    name: "Performance",
    items: ["Code Splitting", "Lazy Loading", "Memoization", "Render Optimization", "Core Web Vitals", "Responsive UI"],
  },
];

export type PipelineStep = { step: string; question: string };

export const beyondUi: PipelineStep[] = [
  { step: "Product requirements", question: "What problem is the customer actually describing on the call?" },
  { step: "Component architecture", question: "Which pieces repeat, and what should their API look like?" },
  { step: "API integration", question: "What does the contract look like, and what happens when it fails?" },
  { step: "State management", question: "Is this server state, global state or local state?" },
  { step: "UX", question: "Are loading, empty and error states designed, not accidental?" },
  { step: "Performance", question: "What does this cost on a mid-range phone on 4G?" },
  { step: "Accessibility", question: "Can it be used with a keyboard and a screen reader?" },
  { step: "SEO", question: "Can a crawler read and understand this page?" },
  { step: "Maintainability", question: "Will the next developer understand it in six months?" },
  { step: "Production behaviour", question: "How will I know it broke, and how fast can it be fixed?" },
];

export const productThinking = [
  { title: "Requirement gathering", body: "Turning customer and stakeholder conversations into scoped, buildable features." },
  { title: "Client demos", body: "Walking customers through features and taking their feedback back into the build." },
  { title: "Support tickets", body: "Debugging real production issues — the fastest way to learn how a product is actually used." },
  { title: "Technical discussions", body: "Working through feature design with product, backend and QA before code is written." },
  { title: "Release cycles", body: "Shipping inside Agile sprints, where done means released and stable — not merged." },
  { title: "Cross-team delivery", body: "Partnering with designers, backend developers and QA through a shared Git and GitHub workflow." },
];
