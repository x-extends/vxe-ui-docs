<template>
  <div>
    <vxe-button status="primary" content="点击弹出" @click="showPopup = true"></vxe-button>
    <!--当使用 append-to 时，必须要保证在该组件渲染之前存在该元素-->
    <vxe-drawer
      v-model="showPopup"
      transfer
      is-within-append-to
      mask-closable
      append-to=".my-drawer-within-demo1-wrapper"
    >
      <template #default>
        <div>显示到挂载区域中</div>
      </template>
    </vxe-drawer>
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
