<template>
  <div>
    <p>
      <vxe-modal v-model="showAlert" type="alert" title="标题" showFooter>
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

const showAlert = ref(false)

const closeAlert = (id: string) => {
  VxeUI.modal.close(id)
}

const openAlertEvent = () => {
  showAlert.value = true
}

const openSlotMessage = () => {
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
</script>
