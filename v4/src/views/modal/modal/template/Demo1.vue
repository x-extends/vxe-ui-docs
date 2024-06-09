<template>
  <div>
    <vxe-modal v-model="showModal" title="标题" :width="600" :height="400" show-footer>
      <template #title>
        <span style="color: red">自定义标题</span>
      </template>
      <template #corner>
        <span style="color: orange">自定义右侧</span>
      </template>
      <template #default>
        <span>
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
      <template #footer>
        <span style="color: blue">自定义底部</span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openModalEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const showModal = ref(false)

const openModalEvent = () => {
  showModal.value = true
}
</script>
