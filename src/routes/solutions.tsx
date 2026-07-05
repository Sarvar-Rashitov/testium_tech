import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { SolutionsGrid, ContactCTA } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions — Testium Tech" },
      { name: "description", content: "Vertical AI solutions: AI for Sales, Finance, HR, Support, Education and full-stack automation." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Section eyebrow={t("pages.solutions.eyebrow")} title={t("pages.solutions.title")} subtitle={t("pages.solutions.subtitle")} className="pt-32">
        <SolutionsGrid />
      </Section>
      <ContactCTA />
    </>
  );
}
