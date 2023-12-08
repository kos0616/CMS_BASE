<template>
  <div class="flex min-h-[100dvh] flex-col">
    <myHeader></myHeader>
    <main class="grow">
      <sidebar></sidebar>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
import myHeader from './components/myHeader.vue'
import sidebar from './components/sidebar/index.vue'
</script>
