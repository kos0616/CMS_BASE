import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/account/record-login/lists',
    component: () => import('./AboutView.vue')
  }
]
export default routes
