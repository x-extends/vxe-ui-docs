<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="可清除" clearable></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
