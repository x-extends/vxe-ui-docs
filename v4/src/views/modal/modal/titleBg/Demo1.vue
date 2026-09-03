<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" :width="600" :height="400" :show-title-background="isTitleBg">
      <template #default>
        <div>是否显示标题背景<vxe-switch v-model="isTitleBg"></vxe-switch></div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
const isTitleBg = ref(true)
</script>
