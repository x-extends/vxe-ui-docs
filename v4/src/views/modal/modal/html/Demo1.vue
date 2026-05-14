<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      use-html
      v-model="showPopup"
      :width="600"
      :height="400"
      content='<div style="color: red;">内容11111111111111111</div><div><a href="https://vxeui.com" style="color: #409eff">点击查看官网</a></div>'>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
