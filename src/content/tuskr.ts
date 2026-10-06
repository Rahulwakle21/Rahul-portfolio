export const tuskr = {
  slug: "tuskr",
  name: "Tuskr",
  kicker: "Product Engineering — Tuskr",
  title: "Building & improving a SaaS product",
  tagline: "Building interfaces that scale beyond the screen.",
  stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "REST APIs", "Node.js", "Express.js"],
  meta: [
    { label: "Company", value: "Celoxis Technologies" },
    { label: "Role", value: "Software Developer" },
    { label: "Period", value: "Jan 2025 — Present" },
    { label: "Domain", value: "Test management SaaS" },
  ],
  product:
    "Tuskr is a cloud test case management product from Celoxis. QA and engineering teams use it to organise test cases, plan and execute test runs, and report on software quality — a workflow-heavy, data-dense SaaS where clarity and speed directly affect how teams ship.",
  role:
    "I work as a Software Developer across the product: frontend features in React and TypeScript, backend features and REST APIs in Node.js and Express.js, production support, and the public Tuskr website, which I redesigned end-to-end.",
  confidentiality:
    "This case study only uses publicly available product information and my own role. Internal architecture, APIs, customer data and roadmap are intentionally left out.",
};

export type Contribution = { title: string; body: string; tags: string[] };

export const contributions: Contribution[] = [
  {
    title: "Tuskr website redesign",
    body: "Redesigned the public website end-to-end — responsive layouts, a consistent visual system and faster page loads on desktop and mobile.",
    tags: ["Responsive UI", "Visual system", "Page-load performance"],
  },
  {
    title: "Reusable component architecture",
    body: "Built shared, typed React components for production workflows so features are composed instead of copy-pasted — reducing UI code redundancy by ~30%.",
    tags: ["React", "TypeScript", "Material UI"],
  },
  {
    title: "API-driven product workflows",
    body: "Delivered production-ready SaaS workflows with React Hooks, Redux Toolkit state management and REST API integration.",
    tags: ["Redux Toolkit", "REST APIs", "Hooks"],
  },
  {
    title: "Render-path performance",
    body: "Applied memoization, lazy loading, code splitting and render-path optimisation to keep interactive screens responsive as they grew.",
    tags: ["Memoization", "Code splitting", "Core Web Vitals"],
  },
  {
    title: "Backend features & REST APIs",
    body: "Built backend features and endpoints with Node.js and Express.js, so I understand the contract from both sides of the network.",
    tags: ["Node.js", "Express.js", "REST"],
  },
  {
    title: "Production support",
    body: "Troubleshot production issues and support tickets, feeding real customer behaviour back into fixes and platform stability.",
    tags: ["Debugging", "Stability", "Support"],
  },
];

export type Challenge = { challenge: string; approach: string };

export const challenges: Challenge[] = [
  {
    challenge: "Complex product workflows",
    approach: "Break workflows into small, composable components with clear props, so each step can be built, tested and changed on its own.",
  },
  {
    challenge: "Large interactive interfaces",
    approach: "Keep state close to where it is used, memoize expensive work and split code by route so heavy screens don't slow the rest of the app.",
  },
  {
    challenge: "API-driven UI",
    approach: "Treat every request as having four states — loading, success, empty and error — and design each one deliberately.",
  },
  {
    challenge: "Maintainability at scale",
    approach: "Consolidate repeated UI into shared, typed components. TypeScript makes the component contract explicit for the next developer.",
  },
  {
    challenge: "A public site that must perform",
    approach: "Responsive-first layouts, a consistent visual system and attention to page weight, so the marketing site loads fast on any device.",
  },
];

export const appliedPerformance = [
  { title: "Memoization", body: "React.memo, useMemo and useCallback for expensive components and values — used deliberately, not by default." },
  { title: "Lazy loading", body: "Deferring components and screens that aren't needed for the first view." },
  { title: "Code splitting", body: "Splitting bundles so users download the code for what they're using." },
  { title: "Render-path optimisation", body: "Cutting unnecessary re-renders so interactive screens stay responsive." },
];

export const performancePractices = [
  { group: "JavaScript", items: ["Dynamic imports for heavy, non-critical UI", "Server-rendered content where possible", "Watching bundle size as a budget", "Avoiding unnecessary global state"] },
  { group: "Network", items: ["No duplicate or waterfall requests", "Caching where data allows it", "Fetching only the fields a view needs", "Debouncing search and filter input"] },
  { group: "Rendering", items: ["Splitting long tasks off the main thread", "Stable component dimensions", "Skeletons that match final layout", "Optimistic UI for perceived speed"] },
  { group: "Assets", items: ["Responsive, correctly sized images", "Modern formats (AVIF / WebP)", "Self-hosted, subset fonts", "No render-blocking third-party scripts"] },
];

export type Vital = {
  short: string;
  name: string;
  measures: string;
  good: string;
  levers: string[];
};

export const coreWebVitals: Vital[] = [
  {
    short: "LCP",
    name: "Largest Contentful Paint",
    measures: "How quickly the main content appears.",
    good: "≤ 2.5 s",
    levers: ["Server-render the hero and critical content", "Prioritise and correctly size the LCP image", "Remove render-blocking CSS and scripts", "Improve server response time (TTFB)"],
  },
  {
    short: "INP",
    name: "Interaction to Next Paint",
    measures: "How quickly the page responds to input.",
    good: "≤ 200 ms",
    levers: ["Avoid unnecessary React re-renders", "Break up long-running JavaScript", "Keep event handlers light; defer non-urgent work", "Ship less JavaScript to hydrate"],
  },
  {
    short: "CLS",
    name: "Cumulative Layout Shift",
    measures: "How stable the layout is while loading.",
    good: "≤ 0.1",
    levers: ["Reserve width and height for images and media", "Load fonts with metric-matched fallbacks", "Keep loading skeletons the same size as content", "Never inject content above what's being read"],
  },
];

export const seoChecklist = [
  { group: "Markup", items: ["Semantic HTML landmarks", "One H1, ordered H2 / H3 hierarchy", "Descriptive alt text", "Accessible, descriptive links"] },
  { group: "Metadata", items: ["Unique title and meta description", "Canonical URLs", "Open Graph and Twitter cards", "JSON-LD structured data"] },
  { group: "Crawling", items: ["robots.txt", "XML sitemap", "Clean, descriptive URLs", "Internal linking between pages"] },
  { group: "Experience", items: ["Mobile-first responsive layout", "Core Web Vitals", "Server-rendered content", "No keyword stuffing"] },
];

export const productImprovements = [
  "Consistent spacing, typography and components across the public site",
  "Layouts that adapt properly between desktop, tablet and mobile",
  "Faster page loads by reducing page weight and unnecessary work",
  "Reusable components that keep product screens visually consistent",
];

export const engineeringPractices = [
  "TypeScript for explicit component and API contracts",
  "Reusable components over duplicated UI",
  "Agile delivery with product, backend and QA",
  "Git and GitHub based collaboration",
  "Production debugging through real support tickets",
  "AI-assisted development (Cursor, Claude, ChatGPT, Copilot) with human review",
];

export const outcomes = [
  { value: "~30%", label: "less UI code redundancy through reusable components", measured: true },
  { value: "Faster", label: "page loads on the redesigned Tuskr website across desktop and mobile" },
  { value: "Consistent", label: "responsive behaviour and visual system across the public site" },
  { value: "Stabler", label: "platform through production troubleshooting and support-ticket fixes" },
];
