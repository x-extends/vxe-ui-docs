<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      use-html
      v-model="showPopup"
      :width="600"
      content='<div style="color: red;">内容11111111111111111</div><div><a href="https://vxeui.com" style="color: #409eff">点击查看官网</a></div>'>
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
  },
  methods: {
    openEvent () {
      this.showPopup = true
    }
  }
})
</script>
