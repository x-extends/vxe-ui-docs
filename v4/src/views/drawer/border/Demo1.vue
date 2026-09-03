<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer v-model="showPopup" :border="isBorder">
      <template #default>
        <div>是否显示边框<vxe-switch v-model="isBorder"></vxe-switch></div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
const isBorder = ref(false)
</script>
