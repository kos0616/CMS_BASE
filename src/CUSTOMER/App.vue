<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const env = import.meta
</script>

<template>
  <div class="container text-center">
    <span class="text-primary-400">CUSTOMER{{ env }}</span>
  </div>

  <RouterView />
</template>
