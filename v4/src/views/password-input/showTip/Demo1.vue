<template>
  <div>
    <vxe-password-input v-model="val1" placeholder="实时显示工具提示" show-tooltip></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
