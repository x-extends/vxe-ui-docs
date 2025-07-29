<template>
  <div>
    <vxe-switch v-model="isEditable"></vxe-switch>

    <vxe-date-picker v-model="val1" :editable="isEditable"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isEditable = ref(false)
const val1 = ref()
</script>
