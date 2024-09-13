<template>
  <div>
    <vxe-button content="自定义JSX模板" @click="openSlotAlert()"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openSlotAlert  () {
      VxeUI.modal.alert({
        title: '标题',
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
