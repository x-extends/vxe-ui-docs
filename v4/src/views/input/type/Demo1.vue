<template>
  <div>
    <vxe-input v-model="val1" placeholder="自定义提示语"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
