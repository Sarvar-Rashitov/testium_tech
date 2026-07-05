import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Testium Tech" },
      { name: "description", content: "Talk to our team about your AI or software project. We reply within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  return (
    <Section className="pt-32" eyebrow={t("nav.contact")} title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-surface-elevated p-6">
            <MessageCircle className="h-5 w-5 text-brand" />
            <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{t("contact.telegramLabel")}</div>
            <a href="https://t.me/testium_uz" className="mt-1 block text-sm font-medium hover:text-brand">@testium</a>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated p-6">
            <Mail className="h-5 w-5 text-brand" />
            <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</div>
            <a href="mailto:hello@testium.uz" className="mt-1 block text-sm font-medium hover:text-brand">hello@testium.tech</a>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated p-6">
            <MapPin className="h-5 w-5 text-brand" />
            <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">{t("contact.hq")}</div>
            <div className="mt-1 text-sm">{t("contact.hqValue")}</div>
            <div className="text-sm text-muted-foreground">{t("contact.remote")}</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <ContactForm source="contact-page" />
          </div>
        </div>
      </div>
    </Section>
  );
}
