import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { ContactCTA } from "@/components/sections/HomeSections";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const name = loaderData ? i18n.t(`data.products.${loaderData.product.slug}.name`) : "Product";
    const tagline = loaderData ? i18n.t(`data.products.${loaderData.product.slug}.tagline`) : "";
    const description = loaderData ? i18n.t(`data.products.${loaderData.product.slug}.description`) : "";
    const desc = (description || tagline).slice(0, 160);
    const url = `https://testium-tech.lovable.app/products/${params.slug}`;
    return {
      meta: [
        { title: `${name} — Testium Tech` },
        { name: "description", content: desc },
        { property: "og:title", content: name },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (<Section title="Product not found"><Link to="/products" className="underline">Back to products</Link></Section>),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { t } = useTranslation();
  const name = t(`data.products.${product.slug}.name`);
  const tagline = t(`data.products.${product.slug}.tagline`);
  const description = t(`data.products.${product.slug}.description`);
  return (
    <>
      <Section className="pt-32">
        <div className="mx-auto max-w-4xl">
          <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">← {t("common.allProducts")}</Link>
          <div className="mt-6 flex items-center gap-2">
            {product.badge && <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">{product.badge}</span>}
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
              {product.status === "live" ? t("common.live") : product.status === "beta" ? t("common.beta") : t("common.comingSoon")}
            </span>
          </div>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">{name}</h1>
          <p className="mt-3 text-xl text-brand">{tagline}</p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {product.url && (
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={product.url} target="_blank" rel="noreferrer">{t("common.visitWebsite")} <ArrowUpRight className="h-4 w-4" /></a>
              </Button>
            )}
            <Button asChild variant="outline" size="lg"><Link to="/contact">{t("common.requestDemo")}</Link></Button>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
              <ul className="mt-6 space-y-3">
                {Array.from({ length: product.featureCount }).map((_, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand"><Check className="h-3 w-3" /></span>
                    {t(`data.products.${product.slug}.features.${idx}`)}
                  </li>
                ))}
              </ul>
            </div>
            {product.integrations && (
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Integrations</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.integrations.map((i: string) => (
                    <span key={i} className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm">{i}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
