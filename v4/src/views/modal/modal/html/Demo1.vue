<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal
      v-model="showPopup"
      use-html
      :width="600"
      :height="400"
      content="<div style=&quot;color: red;&quot;>内容11111111111111111</div><div><a href=&quot;https://vxeui.com&quot; style=&quot;color: #409eff&quot;>点击查看官网</a></div>"
    >
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
