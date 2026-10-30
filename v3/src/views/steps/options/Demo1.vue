<template>
  <div>
    <vxe-steps v-model="val1" :options="dataList"></vxe-steps>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const dataList = [
      { title: '提交申请', content: '2024-01-01 09:00 提交' },
      { title: '部门审核', content: '2024-01-01 10:30 审核通过' },
      { title: '财务复核', content: '2024-01-02 09:15 复核中' },
      { title: '完成打款', content: '等待财务处理' }
    ]

    return {
      val1: 1,
      dataList
    }
  }
})
</script>
