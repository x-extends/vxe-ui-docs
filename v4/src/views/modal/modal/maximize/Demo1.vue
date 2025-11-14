<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" :width="600" :height="400" show-maximize>
      <template #default>
        <div>窗口最大化</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
