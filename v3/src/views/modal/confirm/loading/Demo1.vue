<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup"
      type="confirm"
      status="warning"
      :loading="loading"
      :height="160">
      <template #default>
        <div>显示加载中11</div>
        <div>显示加载中22</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const showPopup = false
    const loading = false

    return {
      showPopup,
      loading
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
