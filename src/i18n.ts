import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

// 👉 Set correct dir on init
i18n.on("initialized", () => {
  document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
});

// 👉 Update dir when language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
});

export default i18n;
