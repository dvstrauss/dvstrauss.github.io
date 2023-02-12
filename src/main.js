import { createApp } from "vue"
import App from "./App.vue"
import i18n from "./plugins/vue-i18n"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.use(vuetify)

app.mount("#app")
