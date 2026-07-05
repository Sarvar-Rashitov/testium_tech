import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t("footer.services"),
      links: [
        { to: "/services/claude-cowork-training", label: t("data.services.claude-cowork-training.title") },
        { to: "/services/course-creator-telegram-crm", label: t("data.services.course-creator-telegram-crm.title") },
        { to: "/services/business-automation", label: t("data.services.business-automation.title") },
        { to: "/services/ai-agent-development", label: t("data.services.ai-agent-development.title") },
        { to: "/services/custom-software-development", label: t("data.services.custom-software-development.title") },
        { to: "/services/saas-development", label: t("data.services.saas-development.title") },
      ],
    },
    {
      title: t("footer.products"),
      links: [
        { to: "/products/nexi-ai", label: "Nexi AI" },
        { to: "/products/finflow-ai", label: "FinFlow AI" },
        { to: "/products/eduself", label: "EduSelf" },
        { to: "/products/ipe-school", label: "IPE School" },
        { to: "/products/dildoras-bot", label: "Dildoras Bot" },
      ],
    },
    {
      title: t("footer.quickLinks"),
      links: [
        { to: "/about", label: t("nav.about") },
        { to: "/careers", label: t("nav.careers") },
        { to: "/blog", label: t("nav.blog") },
        { to: "/contact", label: t("nav.contact") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { to: "/privacy", label: t("footer.privacy") },
        { to: "/terms", label: t("footer.terms") },
        { to: "/cookies", label: t("footer.cookies") },
        { to: "/legal", label: t("common.legal") },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-prose grid gap-12 py-16 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder={t("footer.emailPlaceholder")} className="h-10" />
            <Button type="submit" size="sm" className="h-10 bg-foreground text-background hover:bg-foreground/90">
              {t("footer.subscribe")}
            </Button>
          </form>
          <div className="mt-6 flex items-center gap-2">
            <a href="https://t.me/" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground" aria-label="Telegram"><Send className="h-4 w-4" /></a>
            <a href="https://linkedin.com/" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="mailto:hello@testium.tech" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent hover:text-foreground" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">{c.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} Testium Tech. {t("footer.rights")}</p>
          <p className="text-xs text-muted-foreground">{t("footer.locationLine")}</p>
        </div>
      </div>
    </footer>
  );
}
