import { createI18n } from "vue-i18n"
import messages from "../locales/sv"

export default createI18n({
  availableLocales: ["sv"],
  fallbackLocale: "sv",
  globalInjection: true,
  legacy: false,
  locale: "sv",
  messages,
})
