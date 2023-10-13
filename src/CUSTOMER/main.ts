import './assets/tailwind.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createMeta from '@/CORE/lib/createMeta'
import router from './router'
import App from './App.vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sum: (a: number, b: number) => number
    $cry: (str: string) => void
  }
}

const app = createApp(App)
app.config.globalProperties.$sum = (a: number, b: number) => a + b
app.config.globalProperties.$cry = (str: string) => alert(str)

app.use(createPinia())
app.use(router)

app.mount('#app')

/** 在html加入建立日期 */
document.documentElement.dataset.updated = BUILD_TIME
createMeta('last-modified', BUILD_TIME)
