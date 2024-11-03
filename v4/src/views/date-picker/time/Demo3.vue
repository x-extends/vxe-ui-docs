<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="时间选择" type="time" clearable disabled></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
