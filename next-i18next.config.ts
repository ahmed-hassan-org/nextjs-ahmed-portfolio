import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./public/locales/en.json";
import translationAr from "./public/locales/ar.json";

export const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
});
