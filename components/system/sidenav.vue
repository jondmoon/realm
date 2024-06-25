<template>
  <v-list>
    <template v-for="{ section, links } in sections" :key="section">
      <v-list-subheader>{{ section }}</v-list-subheader>
      <v-list-item
        v-for="{ link, title } in links"
        :key="link"
        :to="link"
        :title="title"
      >
      </v-list-item>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const sections = ref([
  {
    section: 'Admin',
    links: [
      { link: '/admin/layouts', title: 'Layouts' },
      { link: '/admin/locations', title: 'Locations' },
      { link: '/admin/services', title: 'Services' },
      { link: '/admin/types', title: 'Event Types' },
    ],
  },
  {
    section: 'Service Configs',
    links: [
      { link: '/config/av', title: 'Audio/Video' },
      { link: '/config/av/inventory', title: 'Audio/Video Inventory' },
      { link: '/config/av/forms', title: 'Audio/Video Forms' },
      { link: '/config/catering', title: 'Catering' },
      { link: '/config/catering/inventory', title: 'Catering Inventory' },
      { link: '/config/catering/forms', title: 'Catering Forms' },
      { link: '/config/facilities', title: 'Facilities' },
      { link: '/config/security', title: 'Safety & Security' },
    ],
  },
]);
</script>
