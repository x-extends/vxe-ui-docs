<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :preview-method="previewMethod"></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
    ]

    return {
      imgList
    }
  },
  methods: {
    previewMethod ({ option }) {
      return VxeUI.previewImage({
        urlList: [option.url]
      })
    }
  }
})
</script>
