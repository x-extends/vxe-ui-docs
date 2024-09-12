<template>
  <div>
    <vxe-pager
      :current-page.sync="pageVO.currentPage"
      :page-size.sync="pageVO.pageSize"
      :total="pageVO.total"
      :layouts="['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']"
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
      pageSize: 10,
      total: 150
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
