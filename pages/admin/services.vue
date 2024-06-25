<template>
  <v-card class="ma-4">
    <v-card-title>Services</v-card-title>
    <v-card-text
      >This is where the admins can define the different service options (i.e.
      the departments who contribute to events).</v-card-text
    >
    <v-data-table :items="services" :headers="headers"></v-data-table>
  </v-card>
</template>
<script setup>
import { useServiceStore } from '~/stores/services';
const { services } = useServiceStore();
const headers = ref([
  { title: 'ID', key: '_id' },
  { title: 'Name', key: 'name' },
  { title: 'Code', key: 'code' },
  { title: 'Users', key: 'users' },
]);
</script>
