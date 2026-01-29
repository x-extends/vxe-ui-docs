<template>
  <div>
    <vxe-input v-model="val1" type="search" placeholder="搜索类型"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
