<template>
  <div>
    <vxe-calendar v-model="val" type="year"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val = ref('')
</script>
