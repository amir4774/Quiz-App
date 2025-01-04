import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; // To load translation files
import LanguageDetector from "i18next-browser-languagedetector"; // To detect user language

const initializeI18n = async () => {
  // Initialize i18n
  await i18n
    .use(initReactI18next) // Connects i18n to react-i18next
    .use(HttpApi) // Allows loading translations from JSON files
    .use(LanguageDetector) // Auto detects language based on browser settings
    .init({
      fallbackLng: "en", // Default to English if language not found
      lng: "fa", // Default language
      debug: true, // Enable debugging for development

      // Load translations from JSON files
      backend: {
        loadPath: "/src/translation/locales/{{lng}}.json", // Path to translation files
      },

      interpolation: {
        escapeValue: false, // React already escapes values
      },

      detection: {
        // Detect language based on browser or user preferences
        order: ["navigator", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["localStorage", "cookie"],
      },

      preload: ["en", "fa"], // Preload these languages
    });
};

await initializeI18n();

export default i18n;
