<template>
  <div>
    <vxe-tag :visible.sync="val1" content="默认颜色" closable></vxe-tag>
    <vxe-tag :visible.sync="val1" status="primary" content="主要颜色" closable></vxe-tag>
    <vxe-tag status="success" content="信息颜色" closable></vxe-tag>
    <vxe-tag status="info" content="信息颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
    <vxe-tag status="warning" content="警告颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
    <vxe-tag status="error" content="危险颜色" icon="vxe-icon-info-circle" closable></vxe-tag>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: true,
      val2: true
    }
  }
})
</script>
