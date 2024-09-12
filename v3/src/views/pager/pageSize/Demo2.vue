<template>
  <div>
    <p>
      <vxe-pager
        :current-page.sync="pageVO.currentPage"
        :page-size.sync="pageVO.pageSize"
        :total="pageVO.total"
        page-size-placement="top"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
    <p>
      <vxe-pager
        :current-page.sync="pageVO.currentPage"
        :page-size.sync="pageVO.pageSize"
        :total="pageVO.total"
        page-size-placement="bottom"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
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
