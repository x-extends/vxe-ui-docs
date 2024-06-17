<template>
  <div>
    <vxe-textarea v-model="val1" disabled></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('禁用内容')
</script>
