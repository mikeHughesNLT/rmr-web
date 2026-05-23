import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const KB = fs.readFileSync(path.join(process.cwd(), "data/knowledge-base.md"), "utf8");

const SYSTEM = `You are the website assistant for Red Mountain Retreat — a luxury 7-bedroom mountain lodge in Maple Falls, Washington. You help guests learn about the property and guide them toward booking.

Personality: warm, confident, concise. Not salesy — genuinely helpful. You love this property and know it well.

Guidelines:
- Keep replies short (2–4 sentences unless detail is needed)
- Use the knowledge base below as your only source of truth — don't speculate beyond it
- For availability questions: direct to stayredmountain.com/book (live calendar is there)
- For special events or retreats: direct to stayredmountain.com/contact and mention Mike loves those conversations
- If something isn't in the knowledge base: say "I'm not sure about that — reach out via stayredmountain.com/contact and Mike will get back to you."
- Always refer to the property as "Red Mountain Retreat"
- IMPORTANT FORMATTING: Use plain text only. No markdown — no **bold**, no bullet dashes, no headers. Write in natural prose. For lists, use commas or natural sentences instead.

--- KNOWLEDGE BASE ---

${KB}`;

export async function POST(req: NextRequest) {
  const body = await req.json() as { messages: { role: "user" | "assistant"; content: string }[] };
  const { messages } = body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response("Bad request", { status: 400 });
  }

  // Cap conversation length to avoid runaway usage
  const trimmed = messages.slice(-20);

  const stream = anthropic.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    system: SYSTEM,
    messages: trimmed,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
