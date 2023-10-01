const Routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home/index.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About/index.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import('../pages/Product/index.vue'),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart/index.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login/index.vue'),
  },
];

export default Routes;
