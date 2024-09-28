<template>
  <div>
    <vxe-input v-model="userName" placeholder="用户名"></vxe-input>
    <vxe-password-input v-model="val1" placeholder="隐藏控制按钮" :controls="false"></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const userName = ref('')
const val1 = ref('')
</script>
