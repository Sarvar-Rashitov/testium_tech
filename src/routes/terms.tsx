import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — Testium Tech" }, { property: "og:url", content: "/terms" }], links: [{ rel: "canonical", href: "/terms" }] }),
  component: () => (
    <LegalPage title="Terms of Service" intro="Terms that govern your use of Testium Tech website and services." sections={[
      { h: "Acceptance", p: "By using this website you agree to these terms." },
      { h: "Services", p: "Engagements are governed by separate written agreements with mutual obligations." },
      { h: "Intellectual property", p: "Website content is owned by Testium Tech unless stated otherwise." },
      { h: "Limitation of liability", p: "Within the limits of applicable law, Testium Tech is not liable for indirect or consequential damages." },
      { h: "Governing law", p: "These terms are governed by the laws of the Republic of Uzbekistan." },
    ]} />
  ),
});
