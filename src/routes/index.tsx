import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import {
  FeaturedServices, ServicesGrid, ProductsShowcase, OwnershipBanner, WhyUs, ProcessTimeline,
  TechCloud, IndustriesGrid, SolutionsGrid, FAQ, LatestPosts, ContactCTA,
} from "@/components/sections/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Testium Tech — AI-first Software Development Company" },
      { name: "description", content: "Premium AI-first software development. We build AI agents, SaaS platforms, mobile apps and enterprise automation for ambitious teams." },
      { property: "og:title", content: "Testium Tech — AI-first Software Development" },
      { property: "og:description", content: "We design, build and scale AI-native software for ambitious teams worldwide." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Section eyebrow={t("pages.services.featuredEyebrow")} title={t("pages.services.featuredTitle")} subtitle={t("pages.services.featuredSubtitle")}>
        <FeaturedServices />
      </Section>
      <Section eyebrow={t("nav.products")} title={t("sections.productsTitle")} subtitle={t("sections.productsSubtitle")} className="bg-surface">
        <ProductsShowcase />
        <div className="mt-12">
          <OwnershipBanner />
        </div>
      </Section>
      <Section eyebrow={t("nav.services")} title={t("sections.servicesTitle")} subtitle={t("sections.servicesSubtitle")}>
        <ServicesGrid />
      </Section>
      <Section eyebrow={t("pages.about.whyEyebrow")} title={t("sections.whyTitle")} subtitle={t("sections.whySubtitle")} className="bg-surface">
        <WhyUs />
      </Section>
      <Section eyebrow={t("pages.about.processEyebrow")} title={t("sections.processTitle")} subtitle={t("sections.processSubtitle")}>
        <ProcessTimeline />
      </Section>
      <Section eyebrow="Stack" title={t("sections.techTitle")} subtitle={t("sections.techSubtitle")} center className="bg-surface">
        <TechCloud />
      </Section>
      <Section eyebrow={t("nav.solutions")} title={t("sections.solutionsTitle")} subtitle={t("sections.solutionsSubtitle")}>
        <SolutionsGrid />
      </Section>
      <Section eyebrow={t("nav.industries")} title={t("sections.industriesTitle")} subtitle={t("sections.industriesSubtitle")} className="bg-surface">
        <IndustriesGrid />
      </Section>
      <Section eyebrow="FAQ" title={t("sections.faqTitle")} center>
        <FAQ />
      </Section>
      <Section eyebrow={t("nav.blog")} title={t("sections.blogTitle")} className="bg-surface">
        <LatestPosts />
      </Section>
      <ContactCTA />
    </>
  );
}
