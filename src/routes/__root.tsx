import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingTelegram } from "@/components/layout/FloatingTelegram";
import { detectAndApplyLanguage } from "@/i18n";

import { useTranslation } from "react-i18next";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-gradient-brand text-8xl font-semibold">404</h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{t("common.notFound")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("common.notFoundDesc")}</p>
        <div className="mt-8 flex justify-center gap-2">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">{t("common.goHome")}</Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent">{t("common.contactUs")}</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{t("common.didntLoad")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("common.somethingWrong")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90">{t("common.tryAgain")}</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">{t("common.goHome")}</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b0f1a" },
      { title: "Testium Tech — AI-first Software Development Company" },
      { name: "description", content: "Testium Tech designs, builds and scales AI-native software products — AI agents, custom platforms, mobile apps and enterprise automation." },
      { name: "author", content: "Testium Tech" },
      { property: "og:site_name", content: "Testium Tech" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Testium Tech — AI-first Software Development Company" },
      { property: "og:description", content: "Testium Tech designs, builds and scales AI-native software products — AI agents, custom platforms, mobile apps and enterprise automation." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TestiumTech" },
      { name: "twitter:title", content: "Testium Tech — AI-first Software Development Company" },
      { name: "twitter:description", content: "Testium Tech designs, builds and scales AI-native software products — AI agents, custom platforms, mobile apps and enterprise automation." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3a197f78-d91b-42c7-bd83-c6d0e0e1b5ad" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3a197f78-d91b-42c7-bd83-c6d0e0e1b5ad" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Testium Tech",
          url: "https://testium.tech",
          logo: "https://testium.tech/logo.png",
          description: "AI-first software development company building AI agents, custom platforms and enterprise software.",
          sameAs: ["https://t.me/testium", "https://linkedin.com/company/testium-tech"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('testium_theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}` }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [ready, setReady] = useState(false);
  useEffect(() => { detectAndApplyLanguage(); setReady(true); }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col" style={{ visibility: ready ? "visible" : "hidden" }} suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingTelegram />
      </div>
    </QueryClientProvider>
  );
}
