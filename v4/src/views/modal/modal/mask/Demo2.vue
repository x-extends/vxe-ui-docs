<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" :width="600" :height="400" :mask="false">
      <template #default>
        <div>不显示遮罩层</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
