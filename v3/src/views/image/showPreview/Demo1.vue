<template>
  <div>
    <vxe-button @click="showPreview = !showPreview">切换预览 {{ showPreview }}</vxe-button>
    <vxe-image src="https://vxeui.com/resource/img/fj577.jpg" :width="200" :show-preview="showPreview"></vxe-image>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPreview: true
    }
  }
})
</script>
