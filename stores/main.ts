import { defineStore } from 'pinia';
import { useUserStore } from './user';

export const useMainStore = defineStore('mainStore', () => {
  const hasMenu = ref(false);
  const snackbar = ref({
    active: false,
    color: '',
    timeout: 3000,
    text: '',
    action: '',
    actionText: '',
  });
  const navBarActive = ref(true);
  const offline = ref(true);
  const pageSubTitle = ref('');
  const usageLogId = ref('');
  const userStore = useUserStore();
  const { user } = userStore;

  interface SnackbarType {
    active: boolean;
    color: string;
    timeout: number;
    text: string;
    actionText: string;
    action: string;
  }
  function useSnackbar({
    active,
    color,
    timeout,
    text,
    actionText,
    action,
  }: SnackbarType) {
    if (color) snackbar.value.color = color;
    if (timeout) snackbar.value.timeout = timeout === 0 ? -1 : timeout;
    else if (color === 'error') snackbar.value.timeout = 10000;
    else if (color === 'success') snackbar.value.timeout = 6000;
    if (text) snackbar.value.text = text;
    if (actionText) snackbar.value.actionText = actionText;
    if (action) snackbar.value.action = action;
    // This should equate to a true or false exactly; using !! will turn something that evaluates to true/false but is not actually true/false into a true/false
    snackbar.value.active = active == null ? true : !!active;
  }

  interface Route {
    name: string;
    params: { [key: string]: string };
  }
  function usageLogAdd({ name, params }: Route) {
    const arr = [];
    for (const key in params) {
      arr.push({ key, value: params[key] });
    }
    let userId = user._id || '667428d55d4cbe3cf7b31557';
    console.log(
      'Would be adding usage log for userId: ' +
        userId +
        ' :: ' +
        name +
        ' :: ' +
        JSON.stringify(arr)
    );
  }
  async function usageLogUpdate() {
    // When a usage log is added, we store that ID in the store. If that is populated and the out is blank for that id, then update it
    // Also, if the username is not populated (meaning they have been logged out) don't do anything (since we won't know which user's entry to update)
    const { username } = user;
    if (usageLogId.value !== '' && username != null) {
      // Otherwise we need to update the "out" time for the page they came from. This will let us know how long they were on that page.
      // Note: the server will check to make sure we are not updating a record that was already updated
      // await this.$feathers.service('system/usage-log').patch(usageLogId, { out: new Date() })
    }
  }

  return {
    hasMenu,
    snackbar,
    navBarActive,
    offline,
    pageSubTitle,
    usageLogId,
  };
});
