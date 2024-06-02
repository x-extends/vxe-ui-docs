<template>
  <div>
    <p>
      <vxe-modal v-model="showMsg" type="message" :mask="false" :lockView="false" :showHeader="false">
        <template #default>
          <span>
            <vxe-icon name="question-circle-fill" />
            <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
          </span>
        </template>
      </vxe-modal>
      <vxe-button content="自定义插槽模板" @click="openMsgEvent"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义JSX模板" @click="openSlotMessage()"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const showMsg = ref(false)

const openMsgEvent = () => {
  showMsg.value = true
}

const openSlotMessage = () => {
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
</script>
