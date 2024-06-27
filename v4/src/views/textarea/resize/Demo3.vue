<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="以调节元素的宽度" resize="horizontal"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
