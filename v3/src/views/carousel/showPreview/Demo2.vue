<template>
  <div>
    <vxe-carousel v-model="activeName" :options="imgList" height="400" auto-play vertical show-preview></vxe-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeCarouselPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList: VxeCarouselPropTypes.Options = [
      { name: '1', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: '2', url: 'https://vxeui.com/resource/img/fj581.jpeg' },
      { name: '3', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
    ]

    return {
      activeName: '2',
      imgList
    }
  }
})
</script>
