<template>
  <v-card class="ma-4">
    <v-card-title>Layouts</v-card-title>
    <v-card-text
      >This is where the admins can define the available layouts for an event to
      choose. It will be tied to the event type here, and then made available at
      locations.</v-card-text
    >
    <v-data-table :items="layouts" :headers="headers"></v-data-table>
  </v-card>
</template>
<script setup>
import { useLayoutStore } from '~/stores/layouts';
const { layouts } = useLayoutStore();
const headers = ref([
  { title: 'ID', key: '_id' },
  { title: 'Name', key: 'name' },
]);
</script>
