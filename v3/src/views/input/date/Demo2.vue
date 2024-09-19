<template>
  <div>
    <vxe-input v-model="val1" placeholder="日期多选" type="date" clearable multiple></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
