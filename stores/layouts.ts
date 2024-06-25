// @ts-ignore
import { v4 as uuid } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import layoutData from '~/data/layouts.json';

export const useLayoutStore = defineStore('layoutStore', () => {
  const layouts = useStorage('layout', layoutData);

  const getLayout = computed(() => {
    // @ts-ignore
    return (layoutId) => layouts.value.find((_id) => layoutId === _id);
  });

  function addLayout(name: string) {
    layouts.value.push({ _id: uuid(), name });
  }

  return {
    layouts,
    getLayout,
    addLayout,
  };
});
