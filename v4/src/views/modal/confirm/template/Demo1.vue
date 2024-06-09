<template>
  <div>
    <vxe-modal v-model="showConfirm" type="confirm" title="标题" showFooter>
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openConfirmEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const showConfirm = ref(false)

const openConfirmEvent = () => {
  showConfirm.value = true
}
</script>
