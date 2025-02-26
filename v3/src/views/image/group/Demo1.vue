<template>
  <div>
    <vxe-image-group :url-list="urlList" :image-style="{width: 100, height: 100}"></vxe-image-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      urlList: [
        'https://vxeui.com/resource/img/fj573.jpeg',
        'https://vxeui.com/resource/img/fj562.png',
        'https://vxeui.com/resource/img/fj187.jpg'
      ]
    }
  }
})
</script>
