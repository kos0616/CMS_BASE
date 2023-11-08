import { inject, type App } from 'vue'
import mitt, { type Emitter } from 'mitt'
import { $bus } from '../symbols'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bus: typeof emitter
  }
}

export type Events = {
  foo: string
  bar?: number
}

export const useBus = () => inject($bus)

export const emitter: Emitter<Events> = mitt<Events>()

/** 自訂插件，全域bus */
export default {
  install: (app: App<Element>, options?: any) => {
    app.config.globalProperties.$bus = emitter
    app.provide($bus, emitter)
  }
}
