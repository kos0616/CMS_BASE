import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/TEST',
    component: () => import('./AboutView.vue')
  }
];
export default routes;
