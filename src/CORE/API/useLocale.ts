import EN from 'element-plus/es/locale/lang/en'
import CN from 'element-plus/es/locale/lang/zh-cn'
import TW from 'element-plus/es/locale/lang/zh-tw'
import { ref, onMounted, onUnmounted } from 'vue'
import { useBus } from '@/CORE/plugins/bus'

/** 語系更換
 * element-plus 使用 el-config-provider :locale="locale" 進行變換
 * TODO: i18n
 */
export default () => {
  const locale = ref<Record<string, any>>(EN)
  const bus = useBus()

  const handleLang = (lang: string) => {
    if (['ZH-TW', 'ZH_TW', 'ZH-HANT'].includes(lang.toLocaleUpperCase())) {
      locale.value = TW
      return
    }
    if (['ZH-CN', 'ZH_CN', 'ZH-HANS'].includes(lang.toLocaleUpperCase())) {
      locale.value = CN
      return
    }
    locale.value = EN
  }

  onMounted(() => {
    handleLang(document.documentElement.lang)
    bus?.on('changeLang', handleLang)
  })

  onUnmounted(() => {
    bus?.off('changeLang', handleLang)
  })

  return { locale }
}
