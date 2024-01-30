<template>
  <div>
    <!-- <button @click="$bus.emit('foo', 'haha')">FOO</button> -->
    <el-button type="primary">BTN</el-button>
    <el-button type="success">BTN</el-button>
    <i class="fas fa-times fa-2x"></i>
    {{ url }}
    {{ today }}
    {{ text }}
    <el-date-picker v-model="text"></el-date-picker>
    <hr />

    <ul>
      <li>
        本地語系:
        {{ $t('test') }}
      </li>
      <li>
        locale:
        {{ $i18n.locale }}
      </li>
      <li>time: {{ $day(1702365916, 'YYYY-MM-DD') }}</li>
    </ul>
    {{ $screenWidth }}
    {{ height }}
  </div>
</template>

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

// onMounted(() => {
//   $bus?.on('foo', callback)
// })

// onUnmounted(() => {
//   $bus?.off('foo', callback)
// })
</script>
