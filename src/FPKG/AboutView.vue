<script lang="ts" setup>
import { onUnmounted, onMounted } from 'vue';
import { useBus } from '@/CORE/plugins/bus';
const $bus = useBus();

const callback = (str: string) => alert(str);
const url = import.meta.env.VITE_APP_URL;

import { inject } from 'vue';
import { $screenHeight } from '@/CORE/symbols';
import { ref } from 'vue';

import day from 'dayjs';
const today = day().format('YYYY-MM-DD');
const height = inject($screenHeight);
const text = ref('');

onMounted(() => {
  // $bus?.on('foo', callback)
});

onUnmounted(() => {
  // $bus?.off('foo', callback)
});
</script>
<template>
  <div>
    <i class="fas fa-times fa-2x"></i>
    {{ url }}
    {{ today }}
    {{ text }}
    <el-date-picker v-model="text"></el-date-picker>
    <hr />
    {{ $screenWidth }}
    {{ height }}
  </div>
</template>
