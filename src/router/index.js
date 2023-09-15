import { createRouter, createWebHistory } from 'vue-router';
import Routes from './Routes';

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')); // This value will come from api or other calculation but as of now it's coming from localstorage.
  if (to.path.includes('login') && isLoggedIn) next({ name: 'Home' });
  else if (to.meta.requireAuth && !isLoggedIn) next({ name: 'Login' });
  next();
});

export default router;
