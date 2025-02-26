<template>
  <div>
    <vxe-button @click="showPreview = !showPreview">切换预览 {{ showPreview }}</vxe-button>
    <vxe-image-group :url-list="urlList" :image-style="{width: 100, height: 100}" :show-preview="showPreview"></vxe-image-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPreview = ref(true)
const urlList = ref([
  'https://vxeui.com/resource/img/fj573.jpeg',
  'https://vxeui.com/resource/img/fj562.png',
  'https://vxeui.com/resource/img/fj187.jpg'
])
</script>
