<template>
  <div>
    <vxe-checkbox v-model="val1" content="禁用" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val2" content="选中禁用" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val3" content="半选禁用" indeterminate disabled></vxe-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(false)
const val2 = ref(true)
const val3 = ref(false)
</script>
