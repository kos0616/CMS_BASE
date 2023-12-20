import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    alias: '/',
    component: () => import('./auth/login.vue')
  }
];
export default routes;
