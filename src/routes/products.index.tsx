import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { ProductsShowcase, OwnershipBanner, ContactCTA } from "@/components/sections/HomeSections";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Testium Tech" },
      { name: "description", content: "Real AI products built by Testium Tech: Nexi AI, FinFlow AI, EduSelf, IPE School and more." },
      { property: "og:title", content: "Products — Testium Tech" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Section eyebrow={t("pages.products.eyebrow")} title={t("pages.products.title")} subtitle={t("pages.products.subtitle")} className="pt-32">
        <ProductsShowcase />
        <div className="mt-12">
          <OwnershipBanner />
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
