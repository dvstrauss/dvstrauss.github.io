<template>
  <v-card>
    <v-card-title>
      {{ $t("pages.settingsPage.title") }}
    </v-card-title>
    <v-card-text>
      <v-label class="pr-2">
        {{ $t("pages.settingsPage.themeLabel") }}
      </v-label>
      <theme-menu></theme-menu>
      <theme-light-dark></theme-light-dark>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ThemeLightDark, ThemeMenu } from "../components"
</script>
