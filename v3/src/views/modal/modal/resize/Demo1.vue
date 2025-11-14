<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" title="标题1" :width="600" :height="400" resize>
      <template #default>
        <div>鼠标点击窗口边缘，按住边缘拖拽调整窗口宽和高</div>
        <div>按住头部移动！</div>
        <div>按住左边距拖动！</div>
        <div>按住右边距拖动！</div>
        <div>按住底边距拖动！</div>
        <div>按住左下角拖动 ！</div>
        <div>按住右下角拖动！</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  }
})
</script>
