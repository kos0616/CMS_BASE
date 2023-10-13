<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const env = import.meta
</script>

<template>
  <div class="container text-center">
    <RouterLink to="/about" class="px-2">about</RouterLink>
    <RouterLink to="/account" class="px-2">account</RouterLink>
    <span class="text-primary-400">CUSTOMER{{ env }}</span>
  </div>

  <RouterView />
</template>
