<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="月选择" type="month" valueFormat="yyyy-MM-dd"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
