<template>
  <div>
    <div>於登入頁初始化取得IP</div>
    <div>{{ IP.IP }}</div>
    <div>LOGIN</div>

    <div>登入狀態 {{ isLoggedIn }}</div>
    <el-button @click="logout">登出</el-button>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useIPStore } from '@/CORE/stores/IP';
import { useAuth } from '../API/useAuth';

const IP = useIPStore();

const { logout, isLoggedIn } = useAuth();

onMounted(() => {
  IP.getIP();
});
</script>
