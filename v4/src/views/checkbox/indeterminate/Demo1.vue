<template>
  <div>
    <vxe-checkbox v-model="val1" content="已选中" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val2" content="未选中" indeterminate></vxe-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(false)
</script>
