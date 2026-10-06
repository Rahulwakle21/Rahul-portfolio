import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
