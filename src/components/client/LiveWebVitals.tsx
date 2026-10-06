"use client";

import { useEffect, useState } from "react";

type Key = "LCP" | "INP" | "CLS" | "FCP" | "TTFB";
type Reading = number | null | "unsupported";

const config: Record<Key, { label: string; thresholds: [number, number]; format: (v: number) => string }> = {
  LCP: { label: "Largest Contentful Paint", thresholds: [2500, 4000], format: (v) => `${(v / 1000).toFixed(2)} s` },
  INP: { label: "Interaction to Next Paint", thresholds: [200, 500], format: (v) => `${Math.round(v)} ms` },
  CLS: { label: "Cumulative Layout Shift", thresholds: [0.1, 0.25], format: (v) => v.toFixed(3) },
  FCP: { label: "First Contentful Paint", thresholds: [1800, 3000], format: (v) => `${(v / 1000).toFixed(2)} s` },
  TTFB: { label: "Time to First Byte", thresholds: [800, 1800], format: (v) => `${Math.round(v)} ms` },
};

const order: Key[] = ["LCP", "INP", "CLS", "FCP", "TTFB"];

type LayoutShift = PerformanceEntry & { value: number; hadRecentInput: boolean };
type EventTiming = PerformanceEntry & { interactionId?: number };

function rating(key: Key, value: number) {
  const [good, poor] = config[key].thresholds;
  if (value <= good) return { text: "Good", className: "text-accent" };
  if (value <= poor) return { text: "Needs work", className: "text-warn" };
  return { text: "Poor", className: "text-bad" };
}

function observe(type: string, callback: (entries: PerformanceEntryList) => void, extra: object = {}) {
  if (!PerformanceObserver.supportedEntryTypes?.includes(type)) return null;
  const observer = new PerformanceObserver((list) => callback(list.getEntries()));
  observer.observe({ type, buffered: true, ...extra } as PerformanceObserverInit);
  return observer;
}

export function LiveWebVitals() {
  const [values, setValues] = useState<Record<Key, Reading>>({ LCP: null, INP: null, CLS: null, FCP: null, TTFB: null });

  useEffect(() => {
    const set = (key: Key, value: Reading) => setValues((prev) => (prev[key] === value ? prev : { ...prev, [key]: value }));

    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    set("TTFB", nav ? Math.max(nav.responseStart - nav.startTime, 0) : "unsupported");

    let worstInteraction = 0;
    let sessionValue = 0;
    let sessionEntries: LayoutShift[] = [];
    let maxCls = 0;

    const observers = [
      observe("paint", (entries) => {
        const fcp = entries.find((e) => e.name === "first-contentful-paint");
        if (fcp) set("FCP", fcp.startTime);
      }),
      observe("largest-contentful-paint", (entries) => {
        const last = entries.at(-1);
        if (last) set("LCP", last.startTime);
      }),
      observe("layout-shift", (entries) => {
        for (const entry of entries as LayoutShift[]) {
          if (entry.hadRecentInput) continue;
          const first = sessionEntries[0];
          const last = sessionEntries.at(-1);
          const continuesSession =
            first && last && entry.startTime - last.startTime < 1000 && entry.startTime - first.startTime < 5000;
          sessionValue = continuesSession ? sessionValue + entry.value : entry.value;
          sessionEntries = continuesSession ? [...sessionEntries, entry] : [entry];
          maxCls = Math.max(maxCls, sessionValue);
        }
        set("CLS", maxCls);
      }),
      observe(
        "event",
        (entries) => {
          for (const entry of entries as EventTiming[]) {
            if (entry.interactionId) worstInteraction = Math.max(worstInteraction, entry.duration);
          }
          if (worstInteraction) set("INP", worstInteraction);
        },
        { durationThreshold: 16 },
      ),
    ];

    if (!observers[0]) set("FCP", "unsupported");
    if (!observers[1]) set("LCP", "unsupported");
    if (observers[2]) set("CLS", 0);
    else set("CLS", "unsupported");
    if (!observers[3]) set("INP", "unsupported");

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="rounded-2xl border border-accent/30 bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Live · this page, your browser
        </p>
        <p className="font-mono text-xs text-muted">PerformanceObserver · no third-party scripts</p>
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-5">
        {order.map((key) => {
          const value = values[key];
          const numeric = typeof value === "number";
          const r = numeric ? rating(key, value) : null;
          return (
            <div key={key} className="flex min-h-28 flex-col justify-between bg-surface-2 p-4">
              <dt className="font-mono text-xs text-muted" title={config[key].label}>
                {key}
                <span className="sr-only"> — {config[key].label}</span>
              </dt>
              <dd>
                <span className="block text-2xl font-semibold tabular-nums">
                  {numeric ? config[key].format(value) : value === "unsupported" ? "n/a" : "—"}
                </span>
                <span className={`mt-1 block font-mono text-xs ${r?.className ?? "text-muted"}`}>
                  {r?.text ?? (value === "unsupported" ? "Not exposed by this browser" : key === "INP" ? "Interact to measure" : "Measuring…")}
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Real values from your visit, not a screenshot of a lab score. INP here is the slowest interaction so far — click or
        tap anything to update it. Field data across many visitors is what ultimately counts.
      </p>
    </div>
  );
}
