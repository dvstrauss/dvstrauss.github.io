<template>
  <v-menu>
    <template v-slot:activator="{ isActive, props }">
      <slot name="default" :is-active="isActive" :props="props">
        <v-btn
          prepend-icon="mdi-palette"
          v-bind="props"
          :active="isActive"
        >
          {{ currentThemeName }}
          <v-tooltip
            activator="parent"
            location="top"
          >
            {{ t("components.themeMenu.tooltip") }}
          </v-tooltip>
        </v-btn>
      </slot>
    </template>
    <v-list class="theme-list">
      <v-list-item
        v-for="item in items"
        :key="item.value"
        v-bind="item"
        @click="updateTheme(item.value)"
      >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed, onMounted } from "vue"
import { useI18n } from "vue-i18n"
import { useStore } from "vuex"
import { useTheme } from "vuetify"

const { t } = useI18n()
const store = useStore()
const theme = useTheme()

const currentThemeName = computed(() => themeName(theme.global.name.value))
const isDarkMode = computed(() => theme.global.name.value.endsWith("dark"))

const items = computed(() => {
  return uniqueThemeNames()
  .reduce((themeItems, currentThemeName) => {
    const fullName = fullThemeName(currentThemeName)

    themeItems.push({
      active: fullName === theme.global.name.value,
      title: currentThemeName,
      value: fullName,
    })
    return themeItems
  }, [])
})

function uniqueThemeNames() {
  return [
    ...new Set(
      Object
        .keys(theme.themes.value)
        .map(themeName),
    ),
  ]
}

function themeName(name) {
  return name.replace(/-?(light|dark)$/, "") || "vuetify"
}

function fullThemeName(name) {
  return `${ name === "vuetify" ? "" : `${ name }-` }${ isDarkMode.value ? "dark" : "light" }`
}

function updateTheme(value) {
  theme.global.name.value = value
  updateUser()
}

function updateUser() {
  store.dispatch("updateUser", { theme: theme.global.name.value })
}

onMounted(async () => {
  await store.dispatch("fetchUser")
})
</script>
