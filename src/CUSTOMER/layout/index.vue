<script lang="ts" setup>
import { inject } from 'vue'
import { $screenHeight } from '@/CORE/symbols'

const height = inject($screenHeight)
</script>

<template>
  <header>header</header>
  <div>
    <button @click="$cry('KK123')">FUCK</button>
    <hr />
    <button @click="$bus.emit('foo', 'haha')">FOO</button>
    {{ $sum(1, 2) }}
    {{ $screenWidth }}
    {{ height }}
    <slot></slot>
  </div>
</template>
