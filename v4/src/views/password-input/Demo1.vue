<template>
  <div>
    <vxe-password-input v-model="val1" placeholder="密码类型"></vxe-password-input>
    <vxe-password-input v-model="val2" placeholder="可清除" clearable></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
</script>
