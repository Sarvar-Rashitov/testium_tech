import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FloatingTelegram() {
  const { t } = useTranslation();
  return (
    <a
      href="https://t.me/Uzoqov_Mirjalol"
      target="_blank"
      rel="noreferrer"
      aria-label={t("common.writeOnTelegram")}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-3 text-sm font-medium text-white shadow-elevated ring-1 ring-white/10 backdrop-blur transition-all hover:scale-105 hover:bg-[#1c8fc4] sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      <Send className="h-4 w-4" />
      <span className="hidden sm:inline">{t("common.writeOnTelegram")}</span>
    </a>
  );
}
