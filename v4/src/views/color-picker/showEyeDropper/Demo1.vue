<template>
  <div>
    <vxe-color-picker v-model="val1" show-eye-dropper clearable></vxe-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
