<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="禁止输入" :editable="isEdit"></vxe-number-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(123)
const isEdit = ref(false)
</script>
