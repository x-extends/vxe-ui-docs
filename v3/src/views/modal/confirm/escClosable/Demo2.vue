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
    openEvent () {
      VxeUI.modal.alert({
        title: '标题2',
        content: `我是第 ${this.num++} 个`,
        mask: false,
        lockView: false,
        escClosable: true
      })
    }
  }
})
</script>
