<template>
  <v-card class="ma-4">
    <v-card-title>Event Types</v-card-title>
    <v-card-text
      >This is where the admins can define the types of events (meeting,
      concert, banquet, lecture, etc). The type of event will be used in
      determining what locations are available and the layouts available. It
      will also be used by the service departments to configure their input form
      to request the information that they need.</v-card-text
    >
    <v-data-table :items="eventTypes" :headers="headers"></v-data-table>
  </v-card>
</template>
<script setup>
import { useEventTypeStore } from '~/stores/eventTypes';
const { eventTypes } = useEventTypeStore();
const headers = ref([
  { title: 'ID', key: '_id' },
  { title: 'Name', key: 'name' },
  { title: 'Available Room Layouts', key: 'layouts' },
]);
</script>
