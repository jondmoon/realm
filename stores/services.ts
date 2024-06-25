// @ts-ignore
import { v4 as uuid } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import serviceData from '~/data/services.json';

export const useServiceStore = defineStore('serviceStore', () => {
  const services = useStorage('services', serviceData);

  const getService = computed(() => {
    // @ts-ignore
    return (serviceId) => services.value.find((_id) => serviceId === _id);
  });

  function addService(name: string, code: string) {
    services.value.push({ _id: uuid(), name, code, users: [] });
  }

  return {
    services,
    getService,
    addService,
  };
});
