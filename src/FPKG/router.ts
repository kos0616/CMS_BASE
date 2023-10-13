import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    component: () => import('./AboutView.vue')
  }
]
export default routes
