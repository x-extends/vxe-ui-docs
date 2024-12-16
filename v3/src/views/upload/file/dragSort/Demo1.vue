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
      { name: 'fj187.jpeg', url: 'https://vxeui.com/resource/img/fj187.jpeg' },
      { name: 'fj579.jpeg', url: 'https://vxeui.com/resource/img/fj579.jpeg' },
      { name: 'fj843.jpeg', url: 'https://vxeui.com/resource/img/fj843.jpeg' }
    ]

    return {
      fileList
    }
  }
})
</script>
