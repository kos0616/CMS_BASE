<script setup lang="ts">
import { RouterView } from 'vue-router'
import layout from './layout/index.vue'
import { useBus } from '@/CORE/plugins/bus'
import { onMounted, onUnmounted } from 'vue'

const $bus = useBus()

const callback = (str: string) => alert(str)
const url = import.meta.env.VITE_APP_URL
onMounted(() => {
  $bus?.on('foo', callback)
})

onUnmounted(() => {
  $bus?.off('foo', callback)
})
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>
