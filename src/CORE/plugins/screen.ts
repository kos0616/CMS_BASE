import { ref, inject, type App, type Ref } from 'vue';
import { $screenHeight, $screenWidth } from '../symbols';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $screenWidth: Ref<number>;
    $screenHeight: Ref<number>;
  }
}

export const useScreenWidth = () => inject($screenWidth);
export const useScreenHeight = () => inject($screenHeight);

/** 自訂插件，螢幕範圍監聽
 * $screenWidth $screenHeight
 */
export default {
  install: (app: App<Element>, options?: any) => {
    const width = ref(0);
    const height = ref(0);

    app.config.globalProperties.$screenWidth = width;
    app.config.globalProperties.$screenHeight = height;
    app.provide($screenWidth, width);
    app.provide($screenHeight, height);

    window.addEventListener('resize', handleResize);
    handleResize();

    function handleResize() {
      width.value = window.innerWidth || document.documentElement.clientWidth;
      height.value = window.innerHeight || document.documentElement.clientHeight;
    }
  }
};
