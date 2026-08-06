"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function RetreatChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");
    const updated: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setStreaming(true);

    const res = await fetch("/api/retreat-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updated }),
    });

    if (!res.ok || !res.body) {
      setMessages(m => [
        ...m,
        { role: "assistant", content: "Something went wrong — try the form below or email mike@stayredmountain.com directly." },
      ]);
      setStreaming(false);
      return;
    }

    setMessages(m => [...m, { role: "assistant", content: "" }]);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: d } = await reader.read();
      done = d;
      if (value) {
        const chunk = decoder.decode(value);
        setMessages(m => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: copy[copy.length - 1].content + chunk,
          };
          return copy;
        });
      }
    }
    setStreaming(false);
  }

  return (
    <div className="border border-white/10 bg-white/5">
      <div className="h-64 overflow-y-auto p-5 space-y-4">
        {messages.length === 0 && (
          <p className="font-sans text-white/30 text-sm italic">
            Ask about pricing, the schedule, who this is for, what to expect...
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
            <p
              className={`font-sans text-sm leading-relaxed max-w-[85%] ${
                m.role === "user"
                  ? "bg-white/10 text-white px-4 py-2"
                  : "text-white/75"
              }`}
            >
              {m.content || (streaming && i === messages.length - 1 ? "…" : "")}
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="border-t border-white/10 flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") send(); }}
          placeholder="Type a question…"
          disabled={streaming}
          className="flex-1 bg-transparent text-white placeholder:text-white/20 font-sans text-sm px-5 py-4 focus:outline-none disabled:opacity-50"
        />
        <button
          onClick={send}
          disabled={streaming || !input.trim()}
          className="px-6 py-4 font-sans text-[10px] tracking-widest uppercase text-[var(--color-gold)] hover:text-white transition-colors disabled:opacity-30"
        >
          Send
        </button>
      </div>
    </div>
  );
}
