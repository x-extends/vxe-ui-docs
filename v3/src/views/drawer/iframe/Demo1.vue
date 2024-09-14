<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer v-model="showPopup" title="标题1" :width="1000" :padding="false">
      <iframe src="https://vxeui.com/iframe/iframe1.html" style="display: block;width: 100%;height: 100%;border: 0;"></iframe>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  }
})
</script>
