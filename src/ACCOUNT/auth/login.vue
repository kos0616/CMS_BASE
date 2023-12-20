<template>
  <div>
    <div>於登入頁初始化取得IP</div>
    <div>{{ IP.IP }}</div>
    <div>LOGIN</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useIPStore } from '@/CORE/stores/IP';

const IP = useIPStore();

onMounted(() => {
  IP.getIP();
});
</script>
