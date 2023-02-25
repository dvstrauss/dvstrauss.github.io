<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <h1 class="text-center">{{ $t("pages.notFound.title") }}</h1>
    <i18n-t keypath="pages.notFound.text" tag="p">
      <router-link :to="{ name: 'about-page' }">
        {{ $t("pages.notFound.aboutPageLink") }}
      </router-link>
    </i18n-t>
  </v-container>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 10em;
}
</style>
