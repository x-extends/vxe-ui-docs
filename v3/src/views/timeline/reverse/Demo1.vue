<template>
  <div>
    逆序排序：<vxe-switch v-model="isReverse"></vxe-switch>

    <vxe-timeline :reverse="isReverse">
      <vxe-timeline-item title="2024-01-01" content="项目立项，需求评审"></vxe-timeline-item>
      <vxe-timeline-item title="2024-02-15" content="完成第一版开发"></vxe-timeline-item>
      <vxe-timeline-item title="2024-03-20" content="测试通过，准备上线"></vxe-timeline-item>
    </vxe-timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isReverse: true
    }
  }
})
</script>
