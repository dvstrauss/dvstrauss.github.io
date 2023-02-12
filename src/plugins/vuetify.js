import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { sv } from "vuetify/locale"
import dvs from "../themes/dvs"

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: "sv",
    fallback: "sv",
    messages: { sv },
  },
  theme: {
    defaultTheme: "dvs",
    options: {
      customProperties: true,
    },
    themes: {
      dvs,
    },
  },
})
