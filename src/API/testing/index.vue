<template>
  <form @submit.prevent="handleSubmit" action="#" class="flex flex-col gap-4 p-3">
    {{ count.count }}
    {{ count.doubleCount }}
    <el-button @click="count.increment()">inc</el-button>
    <p>casinoAccount/front/login</p>
    <p>frontendAdapter/common/prospects</p>
    <p>casinoPaymentFlow/front-collectSequence/info</p>
    <label>API:<input type="text" v-model="API" class="w-full" /></label>
    <label>method:<input type="text" v-model="method" class="w-full" /></label>
    <el-button native-type="submit">submit</el-button>
    <el-button @click="handleInfo">Info</el-button>
    <el-button @click="handleCollect">handleCollect</el-button>
    <el-button @click="handleCommon">handleCommon</el-button>
  </form>
</template>

<script lang="ts" setup>
import Axios from '@/CORE/axios';
import { ref } from 'vue';
import Info from './Service/Info';
import Collect from './Service/Collect';
import Common from './Service/Common';
// import { useTestStore } from '@/CORE/stores/test';
import { computed } from 'vue';
import { useCounterStore } from '@/store/counter';

// import { useNetworkStatusStore } from '@/CORE/stores/networkStatus';

const API = ref('casinoPaymentFlow/front-collectSequence/info');
const form = ref<Record<string, string>>({});
const method = ref<'get' | 'put'>('get');

const handleSubmit = async () => {
  const getter = await Axios({
    method: method.value,
    url: API.value,
    params: form.value
  });
  if (getter.data.code === 0) {
    console.log(getter);
  } else {
    console.error(getter.data);
  }
};

const handleInfo = async () => {
  const getter = await Info({});
  if (getter) console.log(getter);
};
const handleCollect = async () => {
  const getter = await Collect({});
  if (getter) console.log(getter);
};
const handleCommon = async () => {
  const getter = await Common({});
  if (getter) console.log(getter);
};

// const test = useTestStore();
// const isTest = computed(() => test.isTest);

const count = useCounterStore();

// onMounted(() => {
//   $bus?.on('foo', callback)
// })

// onUnmounted(() => {
//   $bus?.off('foo', callback)
// })
</script>
