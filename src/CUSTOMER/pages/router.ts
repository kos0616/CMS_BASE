import type { RouteRecordRaw } from 'vue-router';
const isDev = import.meta.env.DEV;

const dev = {
  path: '/dev',
  component: () => import('@/CUSTOMER/pages/dev.vue')
};
const arr = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登入'
    },
    component: () => import('@/CUSTOMER/pages/login/index.vue')
  }
] as RouteRecordRaw[];

if (isDev) arr.push(dev);

export default arr;
