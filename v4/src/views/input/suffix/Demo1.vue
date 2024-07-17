<template>
  <div>
    <vxe-input v-model="val1" suffix-icon="vxe-icon-warning-circle-fill" placeholder="自定义后缀图标"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
