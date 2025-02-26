<template>
  <div>
    <vxe-image-group :url-list="urlList" :image-style="{width: 60, height: 60}"></vxe-image-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const urlList = ref([
  'https://vxeui.com/resource/img/fj573.jpeg',
  'https://vxeui.com/resource/img/fj562.png',
  'https://vxeui.com/resource/img/fj187.jpg'
])
</script>
