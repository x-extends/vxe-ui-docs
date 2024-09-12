<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList2" size="medium"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList3" size="small"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList4" size="mini"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const fileList1 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const fileList2 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const fileList3 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    const fileList4 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    return {
      fileList1,
      fileList2,
      fileList3,
      fileList4
    }
  }
})
</script>
