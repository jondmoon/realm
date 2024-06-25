<template>
  <v-app-bar :clipped-left="true" app>
    <v-app-bar-nav-icon
      @click.stop="navBarActive = !navBarActive"
      aria-label="Show or Hide Navigation Menu"
    ></v-app-bar-nav-icon>
    <img
      id="logo"
      src="/img/shield.svg"
      alt="Covenant Logo"
      style="height: 40px"
    />
    <v-toolbar-title class="headline" style="font-size: 1.5em"
      >Scots Realm</v-toolbar-title
    >
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script setup>
// import { setInterval } from 'timers'
import { useUserStore } from '~/stores/user';
import { useMainStore } from '~/stores/main';
import { storeToRefs } from 'pinia';
// import { ref, computed } from '@vue/composition-api'

const { user, isLoggedIn } = storeToRefs(useUserStore());
const { navBarActive, snackbar } = storeToRefs(useMainStore());

const interval = ref(null);
const timer = ref('');
const showTimer = ref(false);
const username = computed(() => user.username || '');
</script>
