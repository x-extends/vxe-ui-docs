<template>
  <div>
    <vxe-button content="自定义JSX模板" @click="openSlotMessage()"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openSlotMessage () {
      VxeUI.modal.message({
        slots: {
          default () {
            return <span>
              <vxe-icon name="question-circle-fill" />
              <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
            </span>
          }
        }
      })
    }
  }
})
</script>
