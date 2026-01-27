<template>
  <div>
    <vxe-switch v-model="showList"></vxe-switch>

    <vxe-upload v-model="fileList" :show-list="showList" multiple></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showList = ref(true)
const fileList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])
</script>
