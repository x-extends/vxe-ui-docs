<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="整数步数 1" type="amount" step="4"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="小数步数 5.5" type="amount" step="3.5"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
</script>
