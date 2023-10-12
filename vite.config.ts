import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // command: 'build' | 'serve'
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  const outDir = env.VITE_APP_NAME

  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir
    },
    /**
     * 全域變數
     * 使用 BUILD_TIME 在 script 內調用
     * 需要在 env.d.ts 登記
     */
    define: {
      BUILD_TIME: JSON.stringify(new Date().toISOString())
    }
  }
})
