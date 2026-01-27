<template>
  <div>
    <vxe-switch v-model="showList"></vxe-switch>

    <vxe-upload v-model="imgList" mode="image" :show-list="showList" multiple></vxe-upload>
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
    const showList = true

    return {
      imgList,
      showList
    }
  }
})
</script>
