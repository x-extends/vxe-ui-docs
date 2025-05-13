<template>
  <div>
    <vxe-button permission-code="xxx" :options="downBtns">下拉按钮</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeButtonPropTypes } from 'vxe-pc-ui'

const downBtns = ref<VxeButtonPropTypes.Options>([
  { name: '1', content: '下拉按钮1', permissionCode: 'xxx' },
  { name: '2', content: '下拉按钮2', permissionCode: 'xxx' },
  { name: '3', content: '下拉按钮3', permissionCode: 'xxx' }
])
</script>
