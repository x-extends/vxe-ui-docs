<template>
  <div>
    垂直布局:<vxe-switch v-model="isVertical"></vxe-switch>

    <vxe-timeline :vertical="isVertical">
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
      isVertical: true
    }
  }
})
</script>
