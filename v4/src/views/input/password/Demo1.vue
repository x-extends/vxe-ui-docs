<template>
  <div>
    <vxe-input v-model="userName" placeholder="用户名"></vxe-input>
    <vxe-input v-model="val1" placeholder="密码类型" type="password"></vxe-input>
    <vxe-input v-model="val2" placeholder="可清除" type="password" clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const userName = ref('')
const val1 = ref('')
const val2 = ref('')
</script>
