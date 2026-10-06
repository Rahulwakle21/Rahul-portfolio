"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        {status === "copied" ? "Copied ✓" : status === "failed" ? "Copy failed" : "Copy email"}
      </button>
      <span role="status" className="sr-only">
        {status === "copied" ? "Email address copied to clipboard" : status === "failed" ? "Could not copy email address" : ""}
      </span>
    </>
  );
}
