import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Testium Tech" }, { property: "og:url", content: "/privacy" }], links: [{ rel: "canonical", href: "/privacy" }] }),
  component: () => (
    <LegalPage title="Privacy Policy" intro="How Testium Tech collects, uses and protects your data." sections={[
      { h: "Information we collect", p: "Contact info you submit through forms (name, email, phone, company, message) and basic analytics." },
      { h: "How we use information", p: "To respond to inquiries, deliver services, and improve our website. We do not sell personal data." },
      { h: "Data retention", p: "Inquiry data is retained for up to 24 months unless deletion is requested." },
      { h: "Your rights", p: "You may request access, correction or deletion at privacy@testium.tech." },
      { h: "Security", p: "We follow industry best practices including encryption in transit and at rest." },
    ]} />
  ),
});
