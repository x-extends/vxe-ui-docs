<template>
  <div>
    <p>
      <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openEvent  () {
      VxeUI.modal.confirm({
        title: '标题1',
        content: '每点击一次弹出一个',
        mask: false,
        lockView: false
      })
    }
  }
})
</script>
