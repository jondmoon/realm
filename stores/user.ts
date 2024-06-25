import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const user = ref({
    _id: '',
    name: '',
    username: '',
    pidm: '',
  });

  const isLoggedIn = computed(() => user.value._id !== '');

  return {
    user,
    isLoggedIn,
  };
});
