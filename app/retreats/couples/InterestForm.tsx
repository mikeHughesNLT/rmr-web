"use client";

import { useState } from "react";

export default function InterestForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/retreat-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setFormState(res.ok ? "done" : "error");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "done") {
    return (
      <div className="text-center py-12">
        <p className="font-display text-2xl text-white font-light mb-3">Thank you.</p>
        <p className="font-sans text-white/60 text-sm">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-[10px] tracking-widest uppercase text-white/40 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/20 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
            placeholder="First and last name"
          />
        </div>
        <div>
          <label className="block font-sans text-[10px] tracking-widest uppercase text-white/40 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/20 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-sans text-[10px] tracking-widest uppercase text-white/40 mb-1.5">
          Phone (optional)
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/20 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
          placeholder="(360) 555-0100"
        />
      </div>
      <div>
        <label className="block font-sans text-[10px] tracking-widest uppercase text-white/40 mb-1.5">
          Any questions or notes?
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/20 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
          placeholder="Optional — anything you'd like us to know."
        />
      </div>

      {formState === "error" && (
        <p className="font-sans text-xs text-red-400">
          Something went wrong. Please try again or email mike@stayredmountain.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "sending"}
        className="w-full bg-[var(--color-gold)] text-white font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-[var(--color-gold-light)] transition-colors disabled:opacity-50"
      >
        {formState === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
