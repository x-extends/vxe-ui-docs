<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="日期多选" limit-count="2" clearable multiple></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
