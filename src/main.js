import { createApp, markRaw } from 'vue';
import 'material-icons/iconfont/material-icons.css';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import './index.css';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedstate);
app.use(Toast);
app.use(pinia);
app.use(router);
app.mount('#app');
