import 'element-plus/dist/index.css'
import './assets/tailwind.scss'
import './assets/element.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import createMeta from '@/CORE/lib/createMeta'
import useBus from '@/CORE/plugins/bus'
import useScreen from '@/CORE/plugins/screen'
import formatNumber from '@/CORE/plugins/formatNumber'
import router from './router'
import App from './App.vue'

const i18n = createI18n({
  legacy: false // you must set `false`, to use Composition API
})

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sum: (a: number, b: number) => number
    $cry: (str: string) => void
  }
}

const app = createApp(App)
app.config.globalProperties.$sum = (a: number, b: number) => a + b
app.config.globalProperties.$cry = (str: string) => alert(str)

app
  .use(createPinia())
  .use(router)
  .use(useScreen)
  .use(useBus)
  .use(i18n)
  .use(formatNumber)
  .use(ElementPlus)

app.mount('#app')

// XXX 不確定是否加入
// 加入的優點: 客戶使用時報錯可以配合UI即時回傳錯誤
// 加入的缺點: 可忽略的錯誤也會被回傳 ex: prompt cancel
// Global error handler
// app.config.errorHandler = (err, instance, info) => {
//   // Handle the error globally
//   console.log('Global error:', err)
//   console.log('Vue instance:', instance)
//   console.log('Error info:', info)
//   // Add code for UI notifications, reporting or other error handling logic
// }

/** 在html加入建立日期 */
document.documentElement.dataset.updated = BUILD_TIME
createMeta('last-modified', BUILD_TIME)
