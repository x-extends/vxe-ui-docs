<template>
  <div>
    <vxe-pager
      v-model:current-page="pageVO.currentPage"
      v-model:page-size="pageVO.pageSize"
      :total="pageVO.total"
      :page-sizes="[10, 20, 100, {label: '大量数据', value: 1000}, {label: '全量数据', value: -1}]"
      @page-change="pageChangeEvent">
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageVO = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 8
})

const pageChangeEvent = () => {
  console.log(`分页事件：第 ${pageVO.currentPage} 页，每页  ${pageVO.pageSize} 条`)
}
</script>
