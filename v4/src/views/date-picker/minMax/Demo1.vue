<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="可选日期限制" start-date="2010-01-01" end-date="2030-01-01"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('2022-01-01')
</script>
