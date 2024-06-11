<template>
  <div>
    <vxe-upload v-model="fileList" multiple></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])
</script>
