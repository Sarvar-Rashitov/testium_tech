import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/legal")({
  head: () => ({ meta: [{ title: "Legal — Testium Tech" }, { property: "og:url", content: "/legal" }], links: [{ rel: "canonical", href: "/legal" }] }),
  component: () => (
    <LegalPage title="Legal Notice" intro="Company and regulatory information." sections={[
      { h: "Company", p: "Testium Tech — an AI-first software development company headquartered in Tashkent, Uzbekistan." },
      { h: "Contact", p: "hello@testium.tech" },
      { h: "Disclaimer", p: "Information on this site is provided for general purposes and may be updated without notice." },
    ]} />
  ),
});
