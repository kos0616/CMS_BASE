// import $i18n from './lang'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// import $store from '@/modules/FPKG-50000-Vuex/index' // lists 與axios溝通

/** 自動引入路徑 */
const Modules = requireAll(
  import.meta.glob('@/**/router.ts', { eager: true }) as Record<
    string,
    { default: RouteRecordRaw[] }
  >
)

// TODO: const error404 = {
//   path: '/error404',
//   // redirect: '/login',
//   component: () => import('@/modules/FPKG-20000-Util/components/error404.vue'),
//   name: 'error404',
//   meta: {
//     url: '/'
//   }
// }

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Modules]
})

// Myrouter.beforeEach((to: any, from: any, next) => {
// TODO: 路徑有變化 初始化分頁數
//   if (from.name !== to.name) {
//     const data = {
//       paginator: {
//         count: 1,
//         page_num: 1,
//         page: 1,
//         perpage: 100
//       }
//     }
//     $store.dispatch('initPaginator', data)
//   }
//   /** 修改Title */
//   const path: string | undefined = to.meta.title
//   setTitle(path)
//   next()
// })

/** 依據條件讓程式自動引入可使用的模組 */
function requireAll<T>(requireContext: Record<string, { default: T[] }>): T[] {
  return Object.values(requireContext)
    .map((module) => module.default)
    .filter((value) => value !== undefined)
    .reduce((acc, cur) => [...acc, ...cur], [] as T[])
}

// TODO: 設定網頁Title
// export function setTitle(path: string | undefined) {
//   if (!path) return
//   let i18nPath: any = path
//   /** 判斷是否為內建的NODE系列節點名稱，若是，簡化向Branch取得名稱 */
//   if (i18nPath.indexOf('NODE') !== -1) {
//     i18nPath = `Permission.${i18nPath}`
//   }
//   const title: any = $i18n.global.t(i18nPath)
//   document.title = title
// }
