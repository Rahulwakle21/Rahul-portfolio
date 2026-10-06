export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rahulwakle.vercel.app").replace(/\/$/, ""),
  name: "Rahul Wakle",
  role: "Software Developer",
  title: "Rahul Wakle — Software Developer · React, TypeScript & Node.js",
  description:
    "Software Developer in Pune with 4 years building SaaS products using React, TypeScript, Redux Toolkit and Node.js. Product engineering case study: Tuskr.",
  locale: "en_IN",
  location: { city: "Pune", country: "India", countryCode: "IN" },
  email: "r.wakle21@gmail.com",
  phone: { e164: "+919561616635", display: "+91 95616 16635" },
  resumePath: "/rahul-wakle-resume.pdf",
  social: {
    github: "https://github.com/Rahulwakle21",
    linkedin: "https://www.linkedin.com/in/rahul-wakle/",
  },
} as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

