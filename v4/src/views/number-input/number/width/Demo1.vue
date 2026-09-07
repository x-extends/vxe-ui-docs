<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="固定宽度 300px" width="300"></vxe-number-input>
    <vxe-number-input v-model="val2" placeholder="百分比宽度 80%" width="80%"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
const val2 = ref(null)
</script>
