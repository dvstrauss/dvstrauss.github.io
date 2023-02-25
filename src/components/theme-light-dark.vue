<template>
  <slot name="default" :on="{ click: toggleDarkMode }">
    <v-btn @click="toggleDarkMode">
      <v-icon>mdi-theme-light-dark</v-icon>
      <v-tooltip
        activator="parent"
        location="top"
      >
        {{ t("components.themeLightDark.tooltip") }}
      </v-tooltip>
    </v-btn>
  </slot>
</template>

<script setup>
import { onMounted } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { useTheme } from "vuetify"

const { t } = useI18n()
const store = useStore()
const theme = useTheme()

function toggleDarkMode() {
  updateTheme()
  updateUser()
}

function updateTheme() {
  if(theme.global.name.value.endsWith("dark")) {
    theme.global.name.value = theme.global.name.value.replace(/dark$/, "light")
  } else {
    theme.global.name.value = theme.global.name.value.replace(/light$/, "dark")
  }
}

function updateUser() {
  store.dispatch("updateUser", { theme: theme.global.name.value })
}

onMounted(async () => {
  await store.dispatch("fetchUser")
})
</script>
