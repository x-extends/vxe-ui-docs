<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer v-model="showPopup" :width="600" :show-close="false">
      <vxe-button status="primary" @click="showPopup = false">自定义关闭按钮</vxe-button>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
