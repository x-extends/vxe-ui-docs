<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="可以调节元素的宽度和高度" resize="both"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
