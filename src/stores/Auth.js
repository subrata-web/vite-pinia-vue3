import { defineStore } from 'pinia';
import AuthService from '../services/AuthService';

export const useAthStore = defineStore('auth', {
  state: () => ({
    user: [],
    isLoggedIn: false,
    isLoading: false,
  }),
  getters: {
    userData: (state) => state.user,
  },
  actions: {
    doLogin(payload) {
      this.isLoading = true;
      AuthService.login(payload)
        .then((response) => {
          const { data } = response;
          if (data['token']) {
            this.isLoading = false;
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', this.isLoggedIn);
            localStorage.setItem('user', JSON.stringify(data));
            this.user = data;
            this.router.push({ name: 'Home' });
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    logout() {
      const localStorageKeys = ['user', 'isLoggedIn'];
      localStorageKeys.forEach((item) => {
        if (localStorage.getItem(item)) {
          localStorage.removeItem(item);
        }
      });
      this.router.push({ name: 'Login' });
    },
  },
});
