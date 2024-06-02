<template>
  <div>
    <vxe-input v-model="val1" placeholder="年份多选" type="year" clearable multiple></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
