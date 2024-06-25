<template>
  <v-card class="ma-4">
    <v-card-title>{{ service }} Forms</v-card-title>
    <v-card-text
      >This is where the service personnel can define the forms used for their
      service area for the different event types.</v-card-text
    >
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// @ts-ignore
const route = useRoute();
// @ts-ignore
const service = ref(
  route.params.service.substring(0, 1).toUpperCase() +
    route.params.service.substring(1)
);
</script>
