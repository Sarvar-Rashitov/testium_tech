import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const nav = [
    { to: "/services", label: t("nav.services") },
    { to: "/products", label: t("nav.products") },
    { to: "/solutions", label: t("nav.solutions") },
    { to: "/industries", label: t("nav.industries") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 glass" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild size="sm" className="hidden gap-1.5 bg-foreground text-background hover:bg-foreground/90 md:inline-flex">
            <Link to="/contact">
              {t("nav.cta")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-foreground text-background hover:bg-foreground/90">
              <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.cta")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
