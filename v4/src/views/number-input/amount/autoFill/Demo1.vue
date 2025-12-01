<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="默认自动补0" type="amount"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="默认自动补0" type="amount"></vxe-number-input>
    <vxe-number-input v-model="val3" placeholder="关闭自动补0" type="amount" :auto-fill="false"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(0)
const val3 = ref(null)
</script>
