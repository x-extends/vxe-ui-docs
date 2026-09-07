<template>
  <div>
    <vxe-input v-model="val1" placeholder="固定宽度 300px" width="300"></vxe-input>
    <vxe-input v-model="val2" placeholder="百分比宽度 80%" width="80%"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
</script>
