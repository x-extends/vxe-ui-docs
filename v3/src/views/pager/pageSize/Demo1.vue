<template>
  <div>
    <vxe-pager
      :current-page.sync="pageVO.currentPage"
      :page-size.sync="pageVO.pageSize"
      :total="pageVO.total"
      :page-sizes="[10, 20, 100, {label: '大量数据', value: 1000}, {label: '全量数据', value: -1}]"
      @page-change="pageChangeEvent">
    </vxe-pager>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const pageVO = {
      currentPage: 1,
      pageSize: 20,
      total: 8
    }

    return {
      pageVO
    }
  },
  methods: {
    pageChangeEvent () {
      console.log(`分页事件：第 ${this.pageVO.currentPage} 页，每页  ${this.pageVO.pageSize} 条`)
    }
  }
})
</script>
