<template>
  <div>
    <p>
      <vxe-button-group mode="text" :options="btnList"></vxe-button-group>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeButtonProps } from 'vxe-pc-ui'

const btnList = ref<VxeButtonProps[]>([
  { content: '按钮1', status: 'warning', name: 1 },
  { content: '按钮1', status: 'success', name: 2 },
  { content: '按钮1', status: 'error', name: 3 }
])
</script>
