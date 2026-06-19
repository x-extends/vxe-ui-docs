<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-modal
      show-footer
      show-cancel-button
      show-confirm-button
      preload
      v-model="showPopup"
      :width="600"
      :height="400">
      <template #default>
        <div>默认就会被加载 {{ myContent }}</div>
      </template>
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
  },
  computed: {
    myContent () {
      console.log('立即加载 - 弹窗内容')
      return '弹窗内容'
    }
  },
  methods: {
    openEvent () {
      this.showPopup = true
    }
  }
})
</script>
