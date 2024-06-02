<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="数值类型"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="可清除" clearable></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
</script>
