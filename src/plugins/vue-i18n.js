import { createI18n } from "vue-i18n"
import { en, sv } from "../locales"

export default createI18n({
  availableLocales: ["en", "sv"],
  fallbackLocale: "en",
  globalInjection: true,
  legacy: false,
  locale: "en",
  messages: {
    en,
    sv,
  },
})
