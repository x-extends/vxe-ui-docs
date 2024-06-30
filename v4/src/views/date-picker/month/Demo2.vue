<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="月份多选" type="month" clearable multiple></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
