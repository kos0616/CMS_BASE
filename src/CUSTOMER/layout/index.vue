<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
const internalInstance = getCurrentInstance()
const $cry = internalInstance?.appContext.config.globalProperties.$cry

const fuckccc = (str: string) => {
  if ($cry instanceof Function) {
    $cry(str)
  }
}

const aaa = 'bar'
</script>

<template>
  <header>header</header>
  <div>
    <button @click="$cry('KK123')">FUCK</button>
    {{ $sum(1, 2) }}

    {{ aaa }}
    <slot></slot>
  </div>
</template>
