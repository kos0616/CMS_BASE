import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createMeta from './lib/createMeta'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/** 在html加入建立日期 */
document.documentElement.dataset.updated = BUILD_TIME
createMeta('last-modified', BUILD_TIME)
