import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/sections/Section";
import { ContactCTA } from "@/components/sections/HomeSections";
import { blogPosts } from "@/data/site";
import i18n from "@/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? i18n.t(`data.blog.${loaderData.post.slug}.title`) : "Article";
    const excerpt = loaderData ? i18n.t(`data.blog.${loaderData.post.slug}.excerpt`) : "";
    const desc = excerpt.length > 160 ? excerpt.slice(0, 157) + "..." : excerpt;
    const url = `https://testium-tech.lovable.app/blog/${params.slug}`;
    return {
      meta: [
        { title: `${title} — Testium Tech` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (<Section title="Article not found"><Link to="/blog" className="underline">Back to blog</Link></Section>),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { t } = useTranslation();
  return (
    <>
      <Section className="pt-32">
        <article className="mx-auto max-w-2xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">← {t("common.backToBlog")}</Link>
          <div className="mt-6 text-xs font-medium uppercase tracking-wider text-brand">{post.category}</div>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{t(`data.blog.${post.slug}.title`)}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span><span>·</span><span>{post.read}</span>
          </div>
          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
            <p className="text-lg text-muted-foreground">{t(`data.blog.${post.slug}.excerpt`)}</p>
          </div>
        </article>
      </Section>
      <ContactCTA />
    </>
  );
}
