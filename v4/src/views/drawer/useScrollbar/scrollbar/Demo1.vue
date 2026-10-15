<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer v-model="showPopup" resize use-scrollbar>
      <template #default>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
