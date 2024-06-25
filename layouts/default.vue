<template>
  <v-app>
    <system-header></system-header>

    <v-footer color="grey" height="44" app></v-footer>

    <v-navigation-drawer v-model="navBarActive" floating elevation="2">
      <system-sidenav></system-sidenav>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<script setup>
import { useMainStore } from '~/stores/main';
import { storeToRefs } from 'pinia';

const { navBarActive } = storeToRefs(useMainStore());
</script>
