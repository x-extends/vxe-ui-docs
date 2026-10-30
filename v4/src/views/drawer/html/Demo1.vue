<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    <vxe-drawer
      v-model="showPopup"
      show-footer
      show-cancel-button
      show-confirm-button
      use-html
      :width="600"
      content="<div style=&quot;color: red;&quot;>内容11111111111111111</div><div><a href=&quot;https://vxeui.com&quot; style=&quot;color: #409eff&quot;>点击查看官网</a></div>"
    >
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)

const openEvent = () => {
  showPopup.value = true
}
</script>
