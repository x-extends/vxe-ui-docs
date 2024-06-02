<template>
  <div>
    <p>
      <vxe-modal v-model="showConfirm" type="confirm" title="标题" status="question" showFooter>
        <template #default>
          <span>
            <vxe-icon name="question-circle-fill" />
            <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
          </span>
        </template>
      </vxe-modal>
      <vxe-button content="自定义插槽模板" @click="openAlertEvent"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义JSX模板" @click="openSlotMessage()"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const showConfirm = ref(false)

const openAlertEvent = () => {
  showConfirm.value = true
}

const openSlotMessage = () => {
  VxeUI.modal.confirm({
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
</script>
