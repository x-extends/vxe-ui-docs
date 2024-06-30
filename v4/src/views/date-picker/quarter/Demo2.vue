<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="季度多选" type="quarter" clearable multiple></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
