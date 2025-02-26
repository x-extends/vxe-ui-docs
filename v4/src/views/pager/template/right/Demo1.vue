<template>
  <div>
    <vxe-pager
      v-model:current-page="pageVO1.currentPage"
      v-model:page-size="pageVO1.pageSize"
      :total="pageVO1.total">
      <template #right>
        <vxe-image src="https://vxeui.com/resource/img/546.gif" height="24"></vxe-image>
        <vxe-button content="下拉按钮">
          <template #dropdowns>
            <vxe-button content="批量修改" mode="text"></vxe-button>
            <vxe-button content="批量管理" mode="text"></vxe-button>
            <vxe-button content="批量删除" mode="text"></vxe-button>
          </template>
        </vxe-button>
        <vxe-image src="https://vxeui.com/resource/img/546.gif" height="24"></vxe-image>
      </template>
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageVO1 = reactive({
  currentPage: 1,
  pageSize: 15,
  total: 100
})
</script>
