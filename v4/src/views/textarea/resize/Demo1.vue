<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="关闭调节元素" resize="none"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
