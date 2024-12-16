<template>
  <div>
    <vxe-upload v-model="fileList" multiple drag-sort></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' },
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj579.png', url: 'https://vxeui.com/resource/img/fj579.png' },
      { name: 'fj586.png', url: 'https://vxeui.com/resource/img/fj586.png' }
    ]

    return {
      fileList
    }
  }
})
</script>
