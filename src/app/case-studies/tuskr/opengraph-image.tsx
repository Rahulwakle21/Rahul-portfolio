import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Product Engineering — Tuskr: building and improving a SaaS product. Case study by Rahul Wakle";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Case study · Tuskr",
    title: "Building & improving a SaaS product",
    tags: ["React", "TypeScript", "Performance", "Technical SEO"],
  });
}
