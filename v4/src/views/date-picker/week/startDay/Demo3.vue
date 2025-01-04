<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="周选择，周三开始" type="week" :start-day="3"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
