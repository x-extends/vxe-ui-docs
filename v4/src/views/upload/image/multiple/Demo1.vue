<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" multiple></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])
</script>
