<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" title="标题1" :width="600" :height="400" show-zoom resize remember>
      <template #default>
        <div>保留状态，会在每次打开时恢复最后一次操作的状态</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
