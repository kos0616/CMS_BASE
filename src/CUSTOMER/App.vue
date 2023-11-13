<script setup lang="ts">
import { RouterView } from 'vue-router'
import layout from './layout/index.vue'
import useLocale from '@/CORE/API/useLocale'
const { locale } = useLocale()
</script>

<template>
  <el-config-provider :locale="locale">
    <layout>
      <RouterView />
    </layout>
  </el-config-provider>
</template>
