<template>
  <div>
    <p>
      <vxe-pager
        v-model:current-page="pageVO.currentPage"
        v-model:page-size="pageVO.pageSize"
        :total="pageVO.total"
        page-size-placement="top"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
    <p>
      <vxe-pager
        v-model:current-page="pageVO.currentPage"
        v-model:page-size="pageVO.pageSize"
        :total="pageVO.total"
        page-size-placement="bottom"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
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
