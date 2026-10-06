import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Rahul Wakle — Software Developer building SaaS products with React, TypeScript and Node.js";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Software Developer",
    title: "I build SaaS products that hold up beyond the screen.",
    tags: ["React", "TypeScript", "Node.js", "Core Web Vitals"],
  });
}
