import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { ContactCTA, WhyUs, ProcessTimeline } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Testium Tech" },
      { name: "description", content: "AI-first software company building premium digital products for ambitious teams." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  const values = ["craft", "speed", "ownership", "transparency"] as const;
  return (
    <>
      <Section className="pt-32" eyebrow={t("pages.about.eyebrow")} title={t("pages.about.title")} subtitle={t("pages.about.subtitle")}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">{t("pages.about.mission")}</h3>
            <p className="mt-3 text-muted-foreground">{t("pages.about.missionDesc")}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t("pages.about.vision")}</h3>
            <p className="mt-3 text-muted-foreground">{t("pages.about.visionDesc")}</p>
          </div>
        </div>
      </Section>
      <Section eyebrow={t("pages.about.valuesEyebrow")} title={t("pages.about.valuesTitle")} className="bg-surface">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((key) => (
            <div key={key} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-base font-semibold">{t(`pages.about.values.${key}.t`)}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t(`pages.about.values.${key}.d`)}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow={t("pages.about.processEyebrow")} title={t("pages.about.processTitle")}>
        <ProcessTimeline />
      </Section>
      <Section eyebrow={t("pages.about.whyEyebrow")} title={t("pages.about.whyTitle")} className="bg-surface">
        <WhyUs />
      </Section>
      <ContactCTA />
    </>
  );
}
