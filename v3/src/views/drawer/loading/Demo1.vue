<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup"
      :width="600"
      :loading="loading">
      <div>显示加载中</div>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      showPopup: false,
      loading: false
    }
  },
  methods: {
    openEvent () {
      this.showPopup = true
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
})
</script>
