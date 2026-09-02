<template>
  <div>
    <vxe-button status="primary" content="点击弹出" @click="showPopup = true"></vxe-button>
    <!--当使用 append-to 时，必须要保证在该组件渲染之前存在该元素-->
    <vxe-modal
      v-model="showPopup"
      transfer
      is-within-append-to
      resize
      show-maximize
      show-minimize
      :width="400" :height="300"
      append-to=".my-within-demo2-wrapper"
    >
      <template #default>
        <div>完整功能操作</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
