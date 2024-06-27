<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="2行高度" :autosize="{ minRows: 2, maxRows: 2 }"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
