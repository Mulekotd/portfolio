import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import enUS from "./locales/en-US";
import ptBR from "./locales/pt-BR";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      "en-US": { translation: enUS }
    },
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US"],
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;
