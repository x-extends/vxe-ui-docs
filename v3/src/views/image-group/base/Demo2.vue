<template>
  <div>
    <vxe-image-group :url-list="urlList" :image-style="{width: 200, height: 200}"></vxe-image-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      urlList: [
        { url: 'https://vxeui.com/resource/img/fj573.jpeg' },
        { url: 'https://vxeui.com/resource/img/fj562.png' },
        { url: 'https://vxeui.com/resource/img/fj187.jpg' }
      ]
    }
  }
})
</script>
