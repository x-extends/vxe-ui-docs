<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup"
      :width="600"
      :height="400"
      :loading="loading">
      <template #default>
        <div>显示加载中</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false,
      loading: false
    }
  },
  methods: {
    openEvent  () {
      this.showPopup = true
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
})
</script>
