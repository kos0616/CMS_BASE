<template>
  <el-menu :unique-opened="true" :router="true">
    <submenu :menuData="menuData"></submenu>
  </el-menu>
</template>

<script lang="ts" setup>
import submenu from './menuTree.vue'
import { ref } from 'vue'
import data from './test.json'

const menuData = ref(data)
</script>
