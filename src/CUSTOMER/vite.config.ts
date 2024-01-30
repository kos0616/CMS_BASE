import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // command: 'build' | 'serve'
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  /** 取得當前的路徑 使用 process.cwd() 只會取得 package.json 層的路徑 */
  const CUSTOMER = fileURLToPath(new URL('./', import.meta.url));
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, CUSTOMER, 'VITE_');
  const outDir = env.VITE_APP_NAME || 'dist';

  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      // Components({ resolvers: [ElementPlusResolver({ importStyle: false })], dts: true })
      Components({ resolvers: [ElementPlusResolver({ importStyle: 'sass' })] })
      // visualizer({
      //   gzipSize: true,
      //   brotliSize: true,
      //   emitFile: false,
      //   filename: 'test.html', //分析图生成的文件名
      //   open: true //如果存在本地服务端口，将在打包后自动展示
      // })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/CUSTOMER/assets/element.scss" as *;
          `
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url))
      }
    },
    build: {
      outDir: `../../${outDir}`
    },
    /**
     * 全域變數
     * 使用 BUILD_TIME 在 script 內調用
     * 需要在 env.d.ts 登記
     */
    define: {
      BUILD_TIME: JSON.stringify(new Date().toISOString())
    }
  };
});
