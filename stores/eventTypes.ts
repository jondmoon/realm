// @ts-ignore
import { v4 as uuid } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import eventTypeData from '~/data/eventTypes.json';

export const useEventTypeStore = defineStore('eventTypeStore', () => {
  const eventTypes = useStorage('eventTypes', eventTypeData);

  const getEventType = computed(() => {
    // @ts-ignore
    return (serviceId) => eventTypes.value.find(({ _id }) => serviceId === _id);
  });

  function addEventType(name: string) {
    eventTypes.value.push({ _id: uuid(), name, layouts: [] });
  }

  function addLayout(id: string, layout: string) {
    const temp = eventTypes.value.find(({ _id }) => _id === id);
    if (temp) temp.layouts.push(layout);
  }

  function removeLayout(id: string, layout: string) {
    const temp = eventTypes.value.find(({ _id }) => _id === id);
    if (temp) {
      for (let i = 0; i < temp.layouts.length; i++) {
        if (temp.layouts[i] === layout) {
          temp.layouts.splice(i, 1);
          break;
        }
      }
    }
  }

  return {
    eventTypes,
    getEventType,
    addEventType,
    addLayout,
    removeLayout,
  };
});
