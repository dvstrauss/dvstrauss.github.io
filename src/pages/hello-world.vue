<template>
  <v-card>
    <v-card-title>{{ titleWithDefault }}</v-card-title>
    <v-card-text>
      <router-link :to="{ name: 'home-page' }">
        {{ $t("helloWorld.homePageLink") }}
      </router-link>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useI18n } from "vue-i18n"

const props = defineProps({
  title: String,
})

const { t } = useI18n()

const titleWithDefault = props.title || t("helloWorld.title")
</script>
