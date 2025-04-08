<template>
  <div>
    <vxe-switch v-model="showTip" status="primary"></vxe-switch>

    <vxe-upload v-model="fileList" multiple tip-text="自定义提示语" :show-tip="showTip"></vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const showTip = false
    const fileList = [
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ]

    return {
      showTip,
      fileList
    }
  }
})
</script>
