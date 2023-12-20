import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/TEST',
    component: () => import('./index.vue')
  }
];
export default routes;
