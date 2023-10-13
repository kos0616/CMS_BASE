import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/account',
    component: () => import('./HomeView.vue')
  }
]

export default routes
