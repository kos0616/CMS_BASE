import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/account/manage/lists',
    component: () => import('./HomeView.vue')
  }
]

export default routes
