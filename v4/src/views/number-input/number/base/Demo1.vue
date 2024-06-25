<template>
  <div>
    <vxe-input v-model="val1" placeholder="数值类型" type="number"></vxe-input>
    <vxe-input v-model="val2" type="number"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(123)
</script>
