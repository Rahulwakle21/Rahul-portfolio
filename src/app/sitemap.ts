import type { MetadataRoute } from "next";
import { tuskr } from "@/content/tuskr";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl(`/case-studies/${tuskr.slug}`), lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
