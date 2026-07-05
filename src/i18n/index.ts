import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { uz } from "./locales/uz";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "uz"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

// Force the first client render to match SSR ("en") so hydration never
// mismatches when the i18next singleton has been kept across HMR reloads.
if (typeof window !== "undefined" && i18n.language !== "en") {
  i18n.changeLanguage("en");
}

export function detectAndApplyLanguage() {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem("testium_lang");
  const navLang = navigator.language?.slice(0, 2);
  const lang = (stored || (navLang && ["en", "ru", "uz"].includes(navLang) ? navLang : "en")) as LangCode;
  if (i18n.language !== lang) i18n.changeLanguage(lang);
}

export default i18n;
