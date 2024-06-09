<template>
  <div>
    <vxe-modal v-model="showNotify" type="notification" :width="320" position="top-right" :mask="false" :lockView="false" showHeader>
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openNotifyEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const showNotify = ref(false)

const openNotifyEvent = () => {
  showNotify.value = true
}
</script>
