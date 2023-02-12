<template>
  <v-card>
    <v-card-title>
      {{ $t("homePage.title") }}
    </v-card-title>
    <v-card-text>
      <router-link :to="{ name: 'hello-world' }">
        {{ $t("homePage.helloWorldLink") }}
      </router-link>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  min-height: 100vh;
}
</style>
