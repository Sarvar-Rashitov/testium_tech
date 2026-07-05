import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { ContactCTA } from "@/components/sections/HomeSections";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? i18n.t(`data.services.${loaderData.service.slug}.title`) : "Service";
    const description = loaderData ? i18n.t(`data.services.${loaderData.service.slug}.description`) : "";
    const desc = description.slice(0, 160);
    const url = `https://testium-tech.lovable.app/services/${params.slug}`;
    return {
      meta: [
        { title: `${title} — Testium Tech` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <Section title="Service not found"><Link to="/services" className="underline">Back to services</Link></Section>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const { t } = useTranslation();
  const Icon = service.icon;
  return (
    <>
      <Section className="pt-32">
        <div className="mx-auto max-w-3xl">
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">← {t("common.allServices")}</Link>
          <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand/10 text-brand ring-1 ring-brand/20">
            <Icon className="h-6 w-6" />
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{t(`data.services.${service.slug}.title`)}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t(`data.services.${service.slug}.description`)}</p>
          <ul className="mt-8 space-y-3">
            {Array.from({ length: service.bulletCount }).map((_, idx) => (
              <li key={idx} className="flex gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-3 w-3" />
                </span>
                {t(`data.services.${service.slug}.bullets.${idx}`)}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/contact">{t("common.startProject")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg"><Link to="/products">{t("common.allProducts")}</Link></Button>
          </div>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
