<template>
  <div>
    <vxe-tooltip v-model="val1" content="自定义提示内容" trigger="manual">
      <vxe-button @click="val1 = !val1">手动模式，点击切换</vxe-button>
    </vxe-tooltip>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: false
    }
  }
})
</script>
