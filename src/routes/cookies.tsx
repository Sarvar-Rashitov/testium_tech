import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — Testium Tech" }, { property: "og:url", content: "/cookies" }], links: [{ rel: "canonical", href: "/cookies" }] }),
  component: () => (
    <LegalPage title="Cookie Policy" intro="How we use cookies and similar technologies." sections={[
      { h: "What are cookies", p: "Small text files stored on your device to make websites work and improve them." },
      { h: "Cookies we use", p: "Essential cookies (language, theme) and anonymous analytics." },
      { h: "Managing cookies", p: "You can disable cookies in your browser settings." },
    ]} />
  ),
});
