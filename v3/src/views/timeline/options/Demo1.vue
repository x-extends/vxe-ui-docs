<template>
  <div>
    <vxe-timeline :options="dataList"></vxe-timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const dataList = [
      { title: '需求', content: '收集并确认需求' },
      { title: '设计', content: '完成交互与视觉' },
      { title: '开发', content: '编码与联调' },
      { title: '测试', content: '功能与回归测试' },
      { title: '上线', content: '发布正式版本' }
    ]

    return {
      dataList
    }
  }
})
</script>
