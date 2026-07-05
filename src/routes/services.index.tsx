import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { FeaturedServices, ServicesGrid, ContactCTA } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Testium Tech" },
      { name: "description", content: "AI agent development, custom software, web & mobile, SaaS, automation, MVP delivery and more." },
      { property: "og:title", content: "Services — Testium Tech" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Section
        eyebrow={t("pages.services.featuredEyebrow")}
        title={t("pages.services.featuredTitle")}
        subtitle={t("pages.services.featuredSubtitle")}
        className="pt-32"
      >
        <FeaturedServices />
      </Section>
      <Section
        eyebrow={t("pages.services.eyebrow")}
        title={t("pages.services.title")}
        subtitle={t("pages.services.subtitle")}
        className="bg-surface"
      >
        <ServicesGrid all />
        <p className="mt-10 text-center text-sm text-muted-foreground">
          <Link to="/contact" className="underline">{t("common.talkToExpert")}</Link>
        </p>
      </Section>
      <ContactCTA />
    </>
  );
}
