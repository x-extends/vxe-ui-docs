<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义后缀图标" suffix-icon="vxe-icon-rmb"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(null)
</script>
