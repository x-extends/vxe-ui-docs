<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList2" mode="image" size="medium"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList3" mode="image" size="small"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList4" mode="image" size="mini"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList1 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const imgList2 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const imgList3 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const imgList4 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    return {
      imgList1,
      imgList2,
      imgList3,
      imgList4
    }
  }
})
</script>
