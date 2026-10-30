<template>
  <div>
    <vxe-button :disabled="val1 < 1" @click="val1--">上一步</vxe-button>
    <vxe-button :disabled="val1 > 2" @click="val1++">下一步</vxe-button>

    <vxe-steps v-model="val1" show-number show-icon>
      <vxe-step-item title="注册账号" content="2024-01-01 已完成"></vxe-step-item>
      <vxe-step-item title="实名认证" content="2024-01-02 已完成"></vxe-step-item>
      <vxe-step-item title="绑定手机" content="处理中"></vxe-step-item>
      <vxe-step-item title="完成" content="待处理"></vxe-step-item>
    </vxe-steps>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 1
    }
  }
})
</script>
