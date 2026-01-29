<template>
  <div>
    <vxe-switch v-model="isEditable"></vxe-switch>
    <vxe-textarea v-model="val1" :editable="isEditable"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('内容111')
const isEditable = ref(false)
</script>
