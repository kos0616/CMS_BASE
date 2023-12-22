import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/API',
    component: () => import('./testing/index.vue')
  }
];
export default routes;
