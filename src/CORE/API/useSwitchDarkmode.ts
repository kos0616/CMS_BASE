import { onMounted, ref, watch } from 'vue'

export default () => {
  const theme = ref<'dark' | 'light'>('dark')

  const setTheme = (theme: 'dark' | 'light') => {
    document.documentElement.dataset.mode = theme
    localStorage.theme = theme
  }

  /** 初始化 theme 不必在 onmounted 執行 */
  const init = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const isDark =
      window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    if (isDark) {
      setTheme('dark')
      theme.value = 'dark'
    } else {
      theme.value = 'light'
      setTheme('light')
    }
  }

  watch(theme, setTheme)

  onMounted(() => {
    init()
  })

  return { setTheme, theme }
}
