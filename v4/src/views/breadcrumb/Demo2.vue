<template>
  <div>
    <p>
      <vxe-breadcrumb :options="navList"></vxe-breadcrumb>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const navList = ref([
  { title: '首页' },
  { title: '系统设置' },
  { title: '菜单设置' }
])
</script>
