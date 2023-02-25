import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { sv } from "vuetify/locale"
import { dvsLight, dvsDark } from "../themes"

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
    defaultTheme: "dvs-dark",
    options: {
      customProperties: true,
    },
    themes: {
      "dvs-light": dvsLight,
      "dvs-dark": dvsDark,
    },
  },
})
