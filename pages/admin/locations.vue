<template>
  <v-card class="ma-4">
    <v-card-title>Locations</v-card-title>
    <v-card-text
      >This is where the admins can define the different locations available for
      events, and the types of events that each location can hold.</v-card-text
    >
    <v-data-table :items="locations" :headers="headers"></v-data-table>
  </v-card>
</template>
<script setup>
import { useLocationStore } from '~/stores/locations';
const { locations } = useLocationStore();
const headers = ref([
  { title: 'ID', key: '_id' },
  { title: 'Building', key: 'building' },
  { title: 'Room', key: 'room' },
  { title: 'Event Types', key: 'eventTypes' },
]);
</script>
