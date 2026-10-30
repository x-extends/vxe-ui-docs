<template>
  <div>
    <vxe-steps v-model="val1" :options="dataList"></vxe-steps>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(1)
const dataList = ref([
  { title: '提交申请', content: '2024-01-01 09:00 提交' },
  { title: '部门审核', content: '2024-01-01 10:30 审核通过' },
  { title: '财务复核', content: '2024-01-02 09:15 复核中' },
  { title: '完成打款', content: '等待财务处理' }
])
</script>
