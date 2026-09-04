<template>
  <div>
    <vxe-button status="primary" content="点击弹出" @click="showPopup = true"></vxe-button>
    <!--当使用 append-to 时，必须要保证在该组件渲染之前存在该元素-->
    <vxe-modal
      v-model="showPopup"
      transfer
      is-within-append-to
      mask-closable
      :width="400"
      :height="300"
      append-to=".my-modal-within-demo1-wrapper"
    >
      <template #default>
        <div>显示到挂载区域中</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
