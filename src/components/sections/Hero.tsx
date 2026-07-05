import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { trustedLogos } from "@/data/site";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-90" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden />
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="text-muted-foreground">{t("hero.badge")}</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="sm:hidden">
              {t("hero.titleShort")} <span className="text-gradient-brand">{t("hero.titleShortAccent")}</span>
            </span>
            <span className="hidden sm:inline">
              {t("hero.title")} <span className="text-gradient-brand">{t("hero.titleAccent")}</span>
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm text-muted-foreground sm:mt-6 sm:text-lg">
            <span className="sm:hidden">{t("hero.subtitleShort")}</span>
            <span className="hidden sm:inline">{t("hero.subtitle")}</span>
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <Button asChild size="lg" className="h-12 gap-1.5 bg-foreground px-6 text-background hover:bg-foreground/90">
              <Link to="/contact">{t("hero.primary")}<ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6">
              <Link to="/products">{t("hero.secondary")}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-surface-elevated/80 p-2 shadow-elevated backdrop-blur">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">testium.tech / {t("hero.demo.dashboard")}</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                {[
                  { k: t("hero.demo.agentsOnline"), v: "12", g: t("hero.demo.today") },
                  { k: t("hero.demo.conversations"), v: "8.4k", g: t("hero.demo.thisWeek") },
                  { k: t("hero.demo.autoResolved"), v: "92%", g: t("hero.demo.pts") },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border bg-surface p-4">
                    <div className="text-xs text-muted-foreground">{s.k}</div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">{s.v}</div>
                    <div className="mt-1 text-xs text-brand">{s.g}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border p-6">
                <div className="space-y-2">
                  {[60, 80, 45, 90, 70].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${w}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-brand"
                        />
                      </div>
                      <span className="w-8 text-right font-mono text-[10px] text-muted-foreground">{w}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-x-20 -top-10 -z-10 h-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        </motion.div>

        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("hero.trusted")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {trustedLogos.map((l) => (
              <span key={l} className="text-sm font-semibold tracking-tight text-muted-foreground">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
