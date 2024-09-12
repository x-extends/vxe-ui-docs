<template>
  <div>
    <vxe-upload v-model="fileList" multiple></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const fileList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]

    return {
      fileList
    }
  }
})
</script>
