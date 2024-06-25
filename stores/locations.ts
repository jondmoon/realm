// @ts-ignore
import { v4 as uuid } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import locationData from '~/data/locations.json';

export const useLocationStore = defineStore('locationStore', () => {
  const locations = useStorage('locations', locationData);

  const getLocation = computed(() => {
    // @ts-ignore
    return (locationId) => locations.value.find((_id) => locationId === _id);
  });

  function addLayout(room: string, building: string) {
    locations.value.push({ _id: uuid(), building, room, eventTypes: [] });
  }

  return {
    locations,
    getLocation,
    addLayout,
  };
});
