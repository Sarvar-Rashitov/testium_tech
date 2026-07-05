import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { blogPosts } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Testium Tech" },
      { name: "description", content: "Product, AI engineering and architecture insights from the Testium Tech team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { t } = useTranslation();
  return (
    <Section className="pt-32" eyebrow={t("pages.blog.eyebrow")} title={t("pages.blog.title")}
      subtitle={t("pages.blog.subtitle")}>
      <div className="grid gap-5 lg:grid-cols-3">
        {blogPosts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-elevated">
            <div className="text-xs font-medium uppercase tracking-wider text-brand">{p.category}</div>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{t(`data.blog.${p.slug}.title`)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(`data.blog.${p.slug}.excerpt`)}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.date}</span><span>{p.read}</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
