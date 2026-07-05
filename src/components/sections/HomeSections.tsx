import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { services } from "@/data/services";
import { products } from "@/data/products";
import {
  industries, solutions, technologies, processSteps, whyUsKeys, faqKeys, blogPosts,
} from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { MobileScroller } from "@/components/layout/MobileScroller";

export function FeaturedServices() {
  const { t } = useTranslation();
  const featured = services.filter((s) => s.featured);
  const cards = featured.map((s, i) => {
    const Icon = s.icon;
    return (
      <motion.div key={s.slug}
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: i * 0.05 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevated">
        <span className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">Featured</span>
        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-brand/10 text-brand ring-1 ring-brand/20">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{t(`data.services.${s.slug}.title`)}</h3>
        <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{t(`data.services.${s.slug}.description`)}</p>
        <ul className="mt-5 space-y-2 text-sm hidden sm:block">
          {Array.from({ length: s.bulletCount }).map((_, idx) => (
            <li key={idx} className="flex gap-2 text-muted-foreground">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><Check className="h-2.5 w-2.5" /></span>
              {t(`data.services.${s.slug}.bullets.${idx}`)}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild size="sm" variant="outline">
            <Link to="/services/$slug" params={{ slug: s.slug }}>
              {t("common.exploreItem", { name: t(`data.services.${s.slug}.title`) })} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    );
  });
  return <MobileScroller gridClassName="grid gap-5 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function ServicesGrid({ all = false }: { all?: boolean }) {
  const { t } = useTranslation();
  const list = all ? services : services.slice(0, 9);
  const cards = list.map((s, i) => {
    const Icon = s.icon;
    return (
      <motion.div key={s.slug}
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
        className="h-full">
        <Link to="/services/$slug" params={{ slug: s.slug }}
          className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevated">
          <div className="flex items-center justify-between">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand/10 text-brand ring-1 ring-brand/20">
              <Icon className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </div>
          <h3 className="mt-4 sm:mt-5 text-base font-semibold">{t(`data.services.${s.slug}.title`)}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{t(`data.services.${s.slug}.description`)}</p>
        </Link>
      </motion.div>
    );
  });
  return <MobileScroller gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function ProductsShowcase() {
  const { t } = useTranslation();
  const cards = products.map((p, i) => (
    <motion.div key={p.slug}
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.06 }}
      className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all hover:border-brand/30 hover:shadow-elevated ${p.highlight ? "ring-1 ring-brand/10" : ""}`}>
      {p.badge && <span className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand">{p.badge}</span>}
      <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {p.status === "live" ? t("common.live") : p.status === "beta" ? t("common.beta") : t("common.comingSoon")}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{t(`data.products.${p.slug}.name`)}</h3>
      <p className="mt-1 text-sm text-brand line-clamp-1 sm:line-clamp-none">{t(`data.products.${p.slug}.tagline`)}</p>
      <p className="mt-3 sm:mt-4 text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">{t(`data.products.${p.slug}.description`)}</p>
      <ul className="mt-5 space-y-1.5 text-sm hidden sm:block">
        {Array.from({ length: Math.min(4, p.featureCount) }).map((_, idx) => (
          <li key={idx} className="flex gap-2 text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {t(`data.products.${p.slug}.features.${idx}`)}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline">
          <Link to="/products/$slug" params={{ slug: p.slug }}>
            {t("common.exploreItem", { name: t(`data.products.${p.slug}.name`) })} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
        {p.url && (
          <Button asChild size="sm" variant="ghost">
            <a href={p.url} target="_blank" rel="noreferrer">
              {t("common.visit")} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  ));
  return <MobileScroller gridClassName="grid gap-6 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function OwnershipBanner() {
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl border border-brand/20 bg-gradient-brand/5 p-8 sm:p-12 text-center">
      <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{t("sections.ownershipTitle")}</h3>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">{t("sections.ownershipSubtitle")}</p>
      <div className="mt-6 flex justify-center">
        <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
          <Link to="/contact">{t("common.talkToExpert")} <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
}

export function WhyUs() {
  const { t } = useTranslation();
  const cards = whyUsKeys.map((key, i) => (
    <motion.div key={key}
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.04 }}
      className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="text-sm font-semibold">{t(`data.why.${key}.title`)}</div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">{t(`data.why.${key}.desc`)}</p>
    </motion.div>
  ));
  return <MobileScroller gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function ProcessTimeline() {
  const { t } = useTranslation();
  const cards = processSteps.map((s, i) => (
    <motion.div key={s.slug}
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.05 }}
      className="h-full rounded-2xl border border-border bg-card p-6">
      <div className="font-mono text-xs text-brand">{s.n}</div>
      <div className="mt-3 text-base font-semibold">{t(`data.process.${s.slug}.title`)}</div>
      <p className="mt-1.5 text-sm text-muted-foreground">{t(`data.process.${s.slug}.desc`)}</p>
    </motion.div>
  ));
  return <MobileScroller gridClassName="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" itemClassName="w-[72%]">{cards}</MobileScroller>;
}

export function TechCloud() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground">
          {tech}
        </span>
      ))}
    </div>
  );
}

export function IndustriesGrid() {
  const { t } = useTranslation();
  const cards = industries.map((ind) => {
    const Icon = ind.icon;
    return (
      <div key={ind.slug} className="h-full rounded-2xl border border-border bg-card p-5">
        <Icon className="h-5 w-5 text-brand" />
        <div className="mt-4 text-sm font-semibold">{t(`data.industries.${ind.slug}.name`)}</div>
        <div className="text-xs text-muted-foreground">{t(`data.industries.${ind.slug}.desc`)}</div>
      </div>
    );
  });
  return <MobileScroller gridClassName="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" itemClassName="w-[65%]">{cards}</MobileScroller>;
}

export function SolutionsGrid() {
  const { t } = useTranslation();
  const cards = solutions.map((s) => {
    const Icon = s.icon;
    return (
      <div key={s.slug} className="h-full rounded-2xl border border-border bg-card p-6">
        <Icon className="h-5 w-5 text-brand" />
        <div className="mt-4 text-base font-semibold">{t(`data.solutions.${s.slug}.name`)}</div>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{t(`data.solutions.${s.slug}.desc`)}</p>
      </div>
    );
  });
  return <MobileScroller gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function FAQ() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqKeys.map((key, i) => (
          <AccordionItem key={key} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium">{t(`data.faqs.${key}.q`)}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{t(`data.faqs.${key}.a`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function LatestPosts() {
  const { t } = useTranslation();
  const cards = blogPosts.slice(0, 3).map((p) => (
    <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
      className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-elevated">
      <div className="text-xs font-medium uppercase tracking-wider text-brand">{p.category}</div>
      <h3 className="mt-3 text-lg font-semibold leading-snug">{t(`data.blog.${p.slug}.title`)}</h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{t(`data.blog.${p.slug}.excerpt`)}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{p.date}</span>
        <span>{p.read}</span>
      </div>
    </Link>
  ));
  return <MobileScroller gridClassName="grid gap-5 lg:grid-cols-3">{cards}</MobileScroller>;
}

export function ContactCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="container-prose">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface-elevated/80 p-10 shadow-elevated backdrop-blur sm:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t("sections.ctaTitle")}</h2>
              <p className="mt-3 text-muted-foreground">{t("sections.ctaSubtitle")}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {[t("sections.ctaReply"), t("sections.ctaFree"), t("sections.ctaNda")].map((x) => (
                  <li key={x} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-brand" />{x}</li>
                ))}
              </ul>
            </div>
            <ContactForm compact source="home-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
