<script lang="ts" setup>
import myHeader from './components/myHeader.vue'
</script>

<template>
  <div class="flex min-h-[100dvh] flex-col">
    <myHeader></myHeader>
    <main class="grow">
      <slot></slot>
    </main>
  </div>
</template>
