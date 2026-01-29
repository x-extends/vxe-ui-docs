<template>
  <div>
    <vxe-switch v-model="isReadonly"></vxe-switch>
    <vxe-input v-model="val1" :readonly="isReadonly"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('内容111')
const isReadonly = ref(true)
</script>
