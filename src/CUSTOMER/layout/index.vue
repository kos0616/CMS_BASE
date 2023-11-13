<script lang="ts" setup>
import { inject } from 'vue'
import { $screenHeight } from '@/CORE/symbols'
import { ref } from 'vue'
import EE from 'element-plus/es/locale/lang/en'
import CC from 'element-plus/es/locale/lang/zh-cn'
import TW from 'element-plus/es/locale/lang/zh-tw'
import day from 'dayjs'
const today = day().format('YYYY-MM-DD')
const height = inject($screenHeight)
const text = ref('')
const locale = ref(EE)
</script>

<template>
  <el-config-provider :locale="locale">
    <header>header</header>
    <div>
      {{ today }}
      {{ text }}
      <el-date-picker v-model="text"></el-date-picker>
      <button @click="$cry('KK123')">FUCK</button>
      <hr />
      <button @click="$bus.emit('foo', 'haha')">FOO</button>
      {{ $sum(1, 2) }}
      {{ $screenWidth }}
      {{ height }}
      <slot></slot>
    </div>
  </el-config-provider>
</template>
