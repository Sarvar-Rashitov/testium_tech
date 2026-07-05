import { useTranslation } from "react-i18next";
import { Check, Globe } from "lucide-react";
import { LANGUAGES, type LangCode } from "@/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage as LangCode) ?? "en";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 px-2.5" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium uppercase tracking-wider">{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => { i18n.changeLanguage(l.code); if (typeof window !== "undefined") localStorage.setItem("testium_lang", l.code); }} className="flex items-center gap-2">
            <span className="text-base leading-none">{l.flag}</span>
            <span className="flex-1">{l.label}</span>
            {current === l.code && <Check className="h-3.5 w-3.5 text-brand" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
