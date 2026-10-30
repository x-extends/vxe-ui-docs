<template>
  <div>
    垂直布局：<vxe-switch v-model="isVertical"></vxe-switch>

    <vxe-steps v-model="val1" :vertical="isVertical">
      <vxe-step-item title="注册账号" content="2024-01-01 已完成"></vxe-step-item>
      <vxe-step-item title="实名认证" content="2024-01-02 已完成"></vxe-step-item>
      <vxe-step-item title="绑定手机" content="处理中"></vxe-step-item>
      <vxe-step-item title="完成" content="待处理"></vxe-step-item>
    </vxe-steps>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(1)
const isVertical = ref(true)
</script>
