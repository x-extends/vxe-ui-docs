<template>
  <div>
    <vxe-switch v-model="isEdit"></vxe-switch>
    <vxe-password-input v-model="val1" placeholder="禁止输入" :editable="isEdit"></vxe-password-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('abc123456')
const isEdit = ref(false)
</script>
