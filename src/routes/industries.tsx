import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { IndustriesGrid, ContactCTA } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Testium Tech" },
      { name: "description", content: "Domain expertise across education, healthcare, finance, retail, logistics, government and more." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Section eyebrow={t("pages.industries.eyebrow")} title={t("pages.industries.title")} subtitle={t("pages.industries.subtitle")} className="pt-32">
        <IndustriesGrid />
      </Section>
      <ContactCTA />
    </>
  );
}
