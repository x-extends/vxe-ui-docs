<template>
  <div>
    <vxe-switch v-model="showTip" status="primary"></vxe-switch>

    <vxe-upload v-model="imgList" mode="image" tip-text="自定义提示语" :show-tip="showTip"></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showTip = ref(false)
const imgList = ref([
  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
  { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
  { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
])
</script>
