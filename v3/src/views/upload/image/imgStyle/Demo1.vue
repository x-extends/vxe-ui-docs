<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :image-style="{width: 200, height: 200}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :show-button-text="false" :image-style="{width: 60, height: 60}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" size="mini" :show-button-text="false" :image-style="{width: 30, height: 30}"></vxe-upload>
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

    return {
      imgList1
    }
  }
})
</script>
