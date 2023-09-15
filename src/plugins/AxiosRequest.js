import axios from 'axios';
import { useAthStore } from '../stores/Auth';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  params: {}, // do not remove this, its added to add params later in the config
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user?.token) {
        config.headers.common['Authorization'] = `Bearer ` + user.token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// In the response interceptor, I checked for the not logged

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.status === 401 && !originalRequest.__isRetryRequest) {
      // if you ever get an unauthorized, logout the user or refresh user token
      const authStore = useAthStore();
      authStore.logout();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
