<template>
  <v-container class="login-page">
    <v-row align="center" class="fill-height">
      <v-col align="center">
        <v-card width="400">
          <v-toolbar>
            <v-toolbar-title>{{ $t("pages.loginPage.title") }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                placeholder="dvs"
                prepend-inner-icon="mdi-account"
                :label="t('pages.loginPage.username')"
              >
              </v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                placeholder="123"
                prepend-inner-icon="mdi-lock"
                :label="t('pages.loginPage.password')"
              >
              </v-text-field>
              <v-btn
                block
                @click="login()"
              >
                {{ t("pages.loginPage.button") }}
              </v-btn>
              <v-label
                v-if="errorText"
                :text="errorText"
                class="d-block text-center pt-4"
              >
              </v-label>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const { t } = useI18n()
const router = useRouter()
const store = useStore()

const errorText = ref(null)
const password = ref(null)
const username = ref(null)

function login() {
  store
    .dispatch("login", { username: username.value, password: password.value })
    .then(() => {
      router.push({ name: "about-page" })
    })
    .catch(error => {
      if(error.response.data.message) {
        errorText.value = error.response.data.message
      } else {
        errorText.value = t("pages.loginPage.defaultError")
      }
    })
}
</script>

<style lang="scss" scoped>
.login-page {
  .fill-height {
    min-height: 100vh;
  }
}
</style>
