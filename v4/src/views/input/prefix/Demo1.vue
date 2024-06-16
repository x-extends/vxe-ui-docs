<template>
  <div>
    <vxe-input v-model="val1" prefix-icon="vxe-icon-user-fill" placeholder="自定义前缀图标"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
