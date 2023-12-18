<template>
  <template v-for="value in menuData">
    <el-sub-menu
      :index="value.p4_node_code"
      v-if="Array.isArray(value.subs) && value.subs.length > 0"
    >
      <template #title>
        <i class="mr-1 fa-fw" :class="value.icon"> </i>
        {{ showNodeName(value.p4_node_code) }}
      </template>
      <menuTree :menuData="value.subs"></menuTree>
    </el-sub-menu>

    <el-menu-item v-else :index="`/${value.p4_node_route}`">
      <i class="mr-1 fa-fw" :class="value.icon"> </i>
      {{ showNodeName(value.p4_node_code) }}
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import menuTree from './menuTree.vue';

type menu = {
  p4_node_id: number;
  p4_node_code: string;
  icon?: string;
  p4_node_route: string | null;
  p4_node_sort: number;
  p4_node_status: string;
  p4_node_name: string;
  p4_node_pid: null | number;
  p4_node_memo: null | string;
  p4_node_development: string;
  p4_node_icon: null | string;
  crud: number;
  subs?: menu[];
  [key: string]: string | number | undefined | null | menu[];
};
const $i18n = useI18n();

defineProps({
  menuData: {
    type: Array as PropType<menu[]>,
    default: () => []
  }
});

/** 客製化語系常數 */
const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;

const showNodeName = (str: string) => {
  if ($i18n.te(`${VITE_APP_NAME}.${str}`)) return $i18n.t(`${VITE_APP_NAME}.${str}`);
  if ($i18n.te(`Permission.${str}`)) return $i18n.t(`Permission.${str}`);
  return str;
};
</script>
