<script setup lang="ts">
import { RouterView } from 'vue-router';
import layout from './layout/index.vue';
import useLocale from '@/CORE/API/useLocale';
const { elementLocale } = useLocale();
</script>

<template>
  <el-config-provider :locale="elementLocale">
    <layout>
      <RouterView />
    </layout>
  </el-config-provider>
</template>
