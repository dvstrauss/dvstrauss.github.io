<template>
  <v-navigation-drawer
    permanent
    rail
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
      >
        <v-tooltip
          activator="parent"
          location="end"
        >
          {{ item.tooltip }}
        </v-tooltip>
      </v-list-item>
      <theme-light-dark v-slot="{ on }">
        <v-list-item
          prepend-icon="mdi-theme-light-dark"
          v-on="on"
        >
          <v-tooltip
            activator="parent"
            location="end"
          >
            {{ t("components.navigationDrawer.themeTooltip") }}
          </v-tooltip>
        </v-list-item>
      </theme-light-dark>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import ThemeLightDark from "./theme-light-dark.vue"

const { t } = useI18n()

const items = ref([
  {
    prependIcon: "mdi-information",
    to: { name: "about-page" },
    tooltip: t("components.navigationDrawer.aboutPageTitle"),
  },
  {
    prependIcon: "mdi-cog",
    to: { name: "settings-page" },
    tooltip: t("components.navigationDrawer.settingsPageTitle"),
  },
])
</script>
