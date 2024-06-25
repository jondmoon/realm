<template>
  <v-card class="ma-4">
    <v-card-title>{{ service }}</v-card-title>
    <v-card-text
      >This is where the service personnel can define the information for their
      service area.</v-card-text
    >
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// @ts-ignore
const route = useRoute();
const service = ref(route.params.service);
</script>
