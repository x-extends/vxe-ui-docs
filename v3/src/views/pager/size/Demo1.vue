<template>
  <div>
    <vxe-pager :current-page.sync="pageVO1.currentPage" :page-size.sync="pageVO1.pageSize" :total="pageVO1.total" />
    <vxe-pager :current-page.sync="pageVO2.currentPage" :page-size.sync="pageVO2.pageSize" :total="pageVO2.total" size="medium" />
    <vxe-pager :current-page.sync="pageVO3.currentPage" :page-size.sync="pageVO3.pageSize" :total="pageVO3.total" size="small" />
    <vxe-pager :current-page.sync="pageVO4.currentPage" :page-size.sync="pageVO4.pageSize" :total="pageVO4.total" size="mini"  />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const pageVO1 = {
      currentPage: 1,
      pageSize: 20,
      total: 88
    }

    const pageVO2 = {
      currentPage: 1,
      pageSize: 20,
      total: 88
    }

    const pageVO3 = {
      currentPage: 1,
      pageSize: 20,
      total: 88
    }

    const pageVO4 = {
      currentPage: 1,
      pageSize: 20,
      total: 88
    }

    return {
      pageVO1,
      pageVO2,
      pageVO3,
      pageVO4
    }
  }
})
</script>
