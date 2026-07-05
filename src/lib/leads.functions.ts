import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  telegram: z.string().trim().min(2).max(64),
  company: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().min(6).max(32),
  service: z.string().trim().max(120).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  pageUrl: z.string().trim().max(500).optional().default(""),
  source: z.string().trim().max(120).optional().default("website"),
});

export type LeadInput = z.infer<typeof LeadSchema>;

function escapeMd(s: string) {
  return s.replace(/[_*`[\]()~>#+\-=|{}.!\\]/g, (m) => "\\" + m);
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      throw new Error("Telegram is not configured");
    }

    const tg = data.telegram.startsWith("@") ? data.telegram : `@${data.telegram}`;
    const lines = [
      "*🚀 New Website Lead — Testium Tech*",
      "",
      `*Name:* ${escapeMd(data.name)}`,
      data.company ? `*Company:* ${escapeMd(data.company)}` : null,
      `*Telegram:* ${escapeMd(tg)}`,
      `*Phone:* ${escapeMd(data.phone)}`,
      data.service ? `*Service:* ${escapeMd(data.service)}` : null,
      data.budget ? `*Budget:* ${escapeMd(data.budget)}` : null,
      "",
      "*Message:*",
      escapeMd(data.message),
      "",
      data.pageUrl ? `*Page:* ${escapeMd(data.pageUrl)}` : null,
      `*Source:* ${escapeMd(data.source)}`,
      `*Time:* ${escapeMd(new Date().toISOString())}`,
    ].filter(Boolean).join("\n");

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines,
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Telegram error:", res.status, body);
      throw new Error("Failed to deliver lead");
    }
    return { ok: true as const };
  });
