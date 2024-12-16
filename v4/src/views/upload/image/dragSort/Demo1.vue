<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" multiple drag-sort></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' },
  { name: 'fj187.jpeg', url: 'https://vxeui.com/resource/img/fj187.jpeg' },
  { name: 'fj579.jpeg', url: 'https://vxeui.com/resource/img/fj579.jpeg' },
  { name: 'fj843.jpeg', url: 'https://vxeui.com/resource/img/fj843.jpeg' }
])
</script>
