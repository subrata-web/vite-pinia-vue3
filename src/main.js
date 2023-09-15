import { createApp, markRaw } from 'vue';
import 'material-icons/iconfont/material-icons.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.mount('#app');