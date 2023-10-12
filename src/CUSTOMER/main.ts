import './assets/tailwind.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createMeta from '@/lib/createMeta'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/** 在html加入建立日期 */
document.documentElement.dataset.updated = BUILD_TIME
createMeta('last-modified', BUILD_TIME)
