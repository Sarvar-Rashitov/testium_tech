import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { ContactCTA } from "@/components/sections/HomeSections";
import { careerOpenings } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Testium Tech" },
      { name: "description", content: "Join Testium Tech. Senior AI, engineering, design and platform roles." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useTranslation();
  return (
    <>
      <Section className="pt-32" eyebrow={t("pages.careers.eyebrow")} title={t("pages.careers.title")}
        subtitle={t("pages.careers.subtitle")}>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {careerOpenings.map((c) => (
            <Link to="/contact" key={c.slug}
              className="group flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 last:border-b-0 hover:bg-accent/50">
              <div>
                <div className="text-base font-semibold">{t(`data.careers.${c.slug}.title`)}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.team} · {c.location} · {c.type}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
