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
  data () {
    return {
      num: 1
    }
  },
  methods: {
    openEvent  () {
      VxeUI.modal.alert({
        title: '标题1',
        content: `每点击一次弹出一个，第 ${this.num++} 个`,
        mask: false,
        lockView: false
      })
    }
  }
})
</script>
