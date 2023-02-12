<template>
    <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            v-for="(plaything, index) of playthings"
            :key="index"
            :title="plaything.title"
            :to="plaything.to"
            :disable-route-watcher="plaything.disable"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const playthings = computed(() => {
  return [
    { title: t("homePage.title"), to: { name: "home-page" }, disable: true },
    { title: t("helloWorld.title"), to: { name: "hello-world" } },
  ]
})
</script>
