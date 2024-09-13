<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      show-footer
      show-confirm-button
      show-cancel-button
      show-zoom
      resize
      v-model="showPopup"
      confirm-button-text="自定义确认"
      cancel-button-text="自定义取消"
      :width="600"
      :height="400">
      <div>支持移动窗口</div>
      <div>支持调整宽高</div>
      <div>支持最大化、最小化</div>
    </vxe-modal>
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
