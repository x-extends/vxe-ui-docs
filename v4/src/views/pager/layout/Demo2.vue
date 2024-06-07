<template>
  <div>
    <p>
      <vxe-pager
        v-model:current-page="pageVO.currentPage"
        v-model:page-size="pageVO.pageSize"
        :total="pageVO.total"
        :layouts="['Jump', 'PageCount']"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
    <p>
      <vxe-pager
        v-model:current-page="pageVO.currentPage"
        v-model:page-size="pageVO.pageSize"
        :total="pageVO.total"
        :layouts="['FullJump']"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
    <p>
      <vxe-pager
        v-model:current-page="pageVO.currentPage"
        v-model:page-size="pageVO.pageSize"
        :total="pageVO.total"
        :layouts="['Total']"
        @page-change="pageChangeEvent">
      </vxe-pager>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxePagerEvents } from 'vxe-pc-ui'

const pageVO = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 150
})

const pageChangeEvent: VxePagerEvents.PageChange = () => {
  console.log(`分页事件：第 ${pageVO.currentPage} 页，每页  ${pageVO.pageSize} 条`)
}
</script>
