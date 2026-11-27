<template>
  <div>
    <vxe-carousel v-model="activeName" :options="imgList" height="400" auto-play show-preview></vxe-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCarouselPropTypes } from 'vxe-pc-ui'

const activeName = ref('2')

const imgList = ref<VxeCarouselPropTypes.Options>([
  { name: '1', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: '2', url: 'https://vxeui.com/resource/img/fj581.jpeg' },
  { name: '3', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
])
</script>
