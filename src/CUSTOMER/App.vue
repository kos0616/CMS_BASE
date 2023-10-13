<script setup lang="ts">
import { RouterView } from 'vue-router'
import layout from './layout/index.vue'
import { useBus } from '@/CORE/plugin/bus'
import { onMounted } from 'vue'

const $bus = useBus()

onMounted(() => {
  $bus.on('foo', (v) => alert(v))
})
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>
