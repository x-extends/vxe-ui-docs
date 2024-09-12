<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" disabled></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    return {
      imgList
    }
  }
})
</script>
