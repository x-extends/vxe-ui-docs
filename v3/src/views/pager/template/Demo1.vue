<template>
  <div>
    <vxe-pager
      :current-page.sync="pageVO1.currentPage"
      :page-size.sync="pageVO1.pageSize"
      :total="pageVO1.total"
      @page-change="pageChangeEvent">
      <template #left>
        <vxe-button content="自定义左侧" size="small">
          <template #dropdowns>
            <vxe-button content="批量修改" mode="text"></vxe-button>
            <vxe-button content="批量管理" mode="text"></vxe-button>
            <vxe-button content="批量删除" mode="text"></vxe-button>
          </template>
        </vxe-button>
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
      </template>
      <template #right>
        <img src="https://vxeui.com/resource/img/546.gif" height="34">
      </template>
    </vxe-pager>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const pageVO1 = {
      currentPage: 1,
      pageSize: 15,
      total: 100
    }

    return {
      pageVO1
    }
  },
  methods: {
    pageChangeEvent () {
      console.log(`分页事件：第 ${this.pageVO1.currentPage} 页，每页  ${this.pageVO1.pageSize} 条`)
    }
  }
})
</script>
