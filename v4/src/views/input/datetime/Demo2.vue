<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期和时间多选" type="datetime" clearable multiple></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
