<template>
  <div>
    <vxe-button :disabled="val1 < 1" @click="val1--">上一步</vxe-button>
    <vxe-button :disabled="val1 > 2" @click="val1++">下一步</vxe-button>

    <vxe-steps v-model="val1" :options="dataList"></vxe-steps>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(1)
const dataList = ref([
  { title: '提交申请', content: '2024-01-01 09:00 提交' },
  { title: '部门审核', content: '2024-01-01 10:30 驳回', status: 'error' },
  { title: '财务复核', content: '2024-01-02 09:15 复核中' },
  { title: '完成打款', content: '等待财务处理' }
])
</script>
