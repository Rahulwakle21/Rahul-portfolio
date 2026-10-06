import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({ eyebrow, title, tags }: { eyebrow: string; title: string; tags: string[] }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b0d",
          backgroundImage: "radial-gradient(circle at 85% 0%, rgba(126,226,168,0.22), transparent 55%)",
          color: "#eceef1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#7ee2a8",
              color: "#062a17",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            RW
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a8b3", letterSpacing: 4, textTransform: "uppercase" }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  border: "1px solid rgba(126,226,168,0.45)",
                  borderRadius: 999,
                  color: "#7ee2a8",
                  fontSize: 22,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#a1a8b3" }}>
            {siteConfig.name} · {siteConfig.location.city}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
