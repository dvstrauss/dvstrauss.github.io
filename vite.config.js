import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueI18n from "@intlify/unplugin-vue-i18n/vite"
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"
import pluginRewriteAll from 'vite-plugin-rewrite-all'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    vueI18n({
      compositionOnly: false,
      include: path.resolve(__dirname, "./src/locales/**")
    }),
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/settings.scss" },
    }),
    pluginRewriteAll(),
  ],
})
