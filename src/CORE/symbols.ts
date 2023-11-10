// vue injectionKey
import type { InjectionKey, Ref } from 'vue'
import type { Emitter } from 'mitt'
import type { Events } from './plugins/bus'

export const $screenWidth: InjectionKey<Ref<number>> = Symbol()

export const $screenHeight: InjectionKey<Ref<number>> = Symbol()

export const $bus: InjectionKey<Emitter<Events>> = Symbol()

export const $formatNumber: InjectionKey<Function> = Symbol()
