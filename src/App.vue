<template>
  <v-card>
    <v-layout>
      <navigation-drawer></navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { NavigationDrawer } from "./components"
</script>

<style lang="scss" scoped>
.v-main > * {
  min-height: 100vh;
}
</style>
