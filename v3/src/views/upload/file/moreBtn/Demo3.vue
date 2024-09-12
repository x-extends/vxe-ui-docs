<template>
  <div>
    <vxe-upload v-model="fileList" :more-config="moreConfig" readonly></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const moreConfig: VxeUploadPropTypes.MoreConfig = {
      maxCount: 1,
      layout: 'horizontal'
    }

    return {
      fileList,
      moreConfig
    }
  }
})
</script>
