"use client";
import { useRef, useState } from "react";

type Phase = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { name: "name",       label: "Name",         type: "text",  required: true,  placeholder: "" },
  { name: "email",      label: "Email",        type: "email", required: true,  placeholder: "" },
  { name: "dates",      label: "Dates in Mind",type: "text",  required: false, placeholder: "e.g. July 10–14" },
  { name: "group_size", label: "Group Size",   type: "text",  required: false, placeholder: "e.g. 10 adults, 2 kids" },
];

export default function ContactPage() {
  const [phase, setPhase]               = useState<Phase>("idle");
  const [summary, setSummary]           = useState("");
  const [callOffer, setCallOffer]       = useState(false);
  const [callDone, setCallDone]         = useState(false);
  const [formData, setFormData]         = useState<Record<string, string>>({});
  const startTs                         = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhase("submitting");

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { _ts: String(startTs.current) };
    fd.forEach((v, k) => { data[k] = String(v); });
    setFormData({ name: data.name, email: data.email });

    try {
      const res  = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setSummary(json.summary ?? "");
      setCallOffer(json.callOffer ?? false);
      setPhase("success");
    } catch {
      setPhase("error");
    }
  }

  async function requestCall() {
    setCallDone(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _call_request: true, ...formData }),
    });
  }

  return (
    <div className="pt-24 bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-sans">Get in Touch</p>
        <h1 className="font-display text-5xl text-[var(--color-forest)] font-light mb-4">Contact Us</h1>
        <p className="text-[var(--color-bark)]/70 font-sans mb-12 text-lg">
          Planning a retreat, celebration, or group stay? We love the creative ones — reach out and let&apos;s talk.
        </p>

        {/* ── Success state ── */}
        {phase === "success" && (
          <div className="space-y-6">
            <div className="bg-[var(--color-forest)] text-[var(--color-cream)] p-10">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-sans">
                Message Received
              </p>
              <h2 className="font-display text-3xl font-light mb-3">
                We&apos;ll be in touch soon.
              </h2>
              {summary && (
                <p className="font-sans text-[var(--color-cream)]/80 text-base leading-relaxed mb-4">
                  {summary}
                </p>
              )}
              <p className="font-sans text-[var(--color-cream)]/60 text-sm">
                Mike typically responds within a few hours.
              </p>
            </div>

            {callOffer && !callDone && (
              <div className="border-2 border-[var(--color-gold)] p-8 text-center">
                <p className="font-sans text-[var(--color-bark)]/70 text-sm mb-4">
                  This sounds like something we&apos;d love to talk through.
                </p>
                <p className="font-display text-2xl text-[var(--color-forest)] mb-6">
                  Would you like Mike or Angie to call you now?
                </p>
                <button
                  onClick={requestCall}
                  className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans"
                >
                  Yes — Call Me Now
                </button>
              </div>
            )}

            {callDone && (
              <div className="border-2 border-[var(--color-forest)] p-6 text-center">
                <p className="font-sans text-[var(--color-forest)] text-sm">
                  Got it — Mike or Angie will call you shortly.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Error state ── */}
        {phase === "error" && (
          <div className="bg-red-50 border border-red-200 p-6 mb-6 text-sm font-sans text-red-700">
            Something went wrong sending your message. Please email us directly at{" "}
            <a href="mailto:runliftrun@gmail.com" className="underline">runliftrun@gmail.com</a>.
          </div>
        )}

        {/* ── Form ── */}
        {(phase === "idle" || phase === "submitting" || phase === "error") && (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot — visually hidden, bots fill it, humans don't */}
            <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
              aria-hidden="true">
              <input name="_honey" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIELDS.slice(0, 2).map(f => (
                <div key={f.name}>
                  <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                    {f.label}
                  </label>
                  <input name={f.name} type={f.type} required={f.required}
                    className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIELDS.slice(2).map(f => (
                <div key={f.name}>
                  <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                    {f.label}
                  </label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder}
                    className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)]" />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase font-sans text-[var(--color-bark)]/60 mb-2">
                Tell us about your stay
              </label>
              <textarea name="message" rows={5} required
                className="w-full border border-[var(--color-cream-dark)] bg-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-[var(--color-gold)] resize-none" />
            </div>

            <button
              type="submit"
              disabled={phase === "submitting"}
              className="bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-gold-light)] transition-colors font-sans disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {phase === "submitting" ? "Sending…" : "Send Message"}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
