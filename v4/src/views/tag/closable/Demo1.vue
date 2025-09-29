<template>
  <div>
    <vxe-tag v-model:visible="val1" content="默认颜色" closable></vxe-tag>
    <vxe-tag v-model:visible="val2" status="primary" content="主要颜色" closable></vxe-tag>
    <vxe-tag status="success" content="信息颜色" closable></vxe-tag>
    <vxe-tag status="info" content="信息颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
    <vxe-tag status="warning" content="警告颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
    <vxe-tag status="error" content="危险颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(true)
</script>
