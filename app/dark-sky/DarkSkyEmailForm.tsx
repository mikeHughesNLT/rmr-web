"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
  }
}

export default function DarkSkyEmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/dark-sky-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        // Fire Meta Pixel Lead event
        window.fbq?.("track", "Lead", { content_name: "Perseid Guide" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <p
          className="font-display text-3xl font-light mb-3"
          style={{ color: "#F5EED8" }}
        >
          Guide on its way.
        </p>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "rgba(245,238,216,0.5)" }}
        >
          Check your inbox. We&apos;ll follow up with the full PDF before July 19.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          autoComplete="email"
          className="flex-1 px-4 py-3 font-sans text-sm focus:outline-none"
          style={{
            backgroundColor: "rgba(245,238,216,0.07)",
            border: "1px solid rgba(245,238,216,0.18)",
            color: "#F5EED8",
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[#C8963E] text-white px-7 py-3 font-sans text-sm tracking-widest uppercase hover:bg-[#D4A84E] transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === "submitting" ? "Sending…" : "Send it"}
        </button>
      </div>
      {status === "error" && (
        <p
          className="mt-3 text-xs font-sans text-center"
          style={{ color: "rgba(220,100,100,0.8)" }}
        >
          Something went wrong — please try again or email{" "}
          <a
            href="mailto:mike@stayredmountain.com"
            className="underline underline-offset-2"
          >
            mike@stayredmountain.com
          </a>
          .
        </p>
      )}
      <p
        className="mt-4 text-[11px] font-sans text-center"
        style={{ color: "rgba(245,238,216,0.28)" }}
      >
        No spam. One email with the guide, occasional RMR updates. Unsubscribe anytime.
      </p>
    </form>
  );
}
