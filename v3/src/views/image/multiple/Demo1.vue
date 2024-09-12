<template>
  <div>
    <vxe-image :src="imgList1" :width="200"></vxe-image>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList1 = [
      'https://vxeui.com/resource/img/fj577.jpg',
      'https://vxeui.com/resource/img/fj581.jpeg',
      'https://vxeui.com/resource/img/fj573.jpeg'
    ]

    return {
      imgList1
    }
  }
})
</script>
