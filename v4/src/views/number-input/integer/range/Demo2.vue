<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="最大值" type="integer" max="50"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="可清除" type="integer" max="50" clearable></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
</script>
