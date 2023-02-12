<template>
  <v-card>
    <v-card-title>
      {{ $t("notFound.title") }}
    </v-card-title>
    <v-card-text>
      <router-link :to="{ name: 'home-page' }">
        {{ $t("notFound.homePageLink") }}
      </router-link>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  min-height: 100vh;
}
</style>
