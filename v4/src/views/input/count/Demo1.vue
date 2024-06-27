<template>
  <div>
    <vxe-input v-model="val1" placeholder="显示字数统计" show-word-count></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
