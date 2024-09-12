<template>
  <div>
    <vxe-pager
      align="center"
      :current-page.sync="pageVO.currentPage"
      :page-size.sync="pageVO.pageSize"
      :total="pageVO.total">
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
  }
})
</script>
