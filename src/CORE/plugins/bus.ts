import mitt, { type Emitter } from 'mitt'

type Events = {
  foo: string
  bar?: number
}

export const emitter: Emitter<Events> = mitt<Events>()
// 舊的方法，有狀況再改回
// export const useBus = () => ({ $bus: emitter })
export const useBus = () => emitter
