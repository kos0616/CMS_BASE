<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import layout from './layout/index.vue'

import EE from 'element-plus/es/locale/lang/en'
import CC from 'element-plus/es/locale/lang/zh-cn'
import TW from 'element-plus/es/locale/lang/zh-tw'
const locale = ref(EE)
</script>

<template>
  <el-config-provider :locale="locale">
    <layout>
      <RouterView />
    </layout>
  </el-config-provider>
</template>
