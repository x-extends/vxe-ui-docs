<template>
  <div>
    <vxe-pager
      align="right"
      v-model:current-page="pageVO.currentPage"
      v-model:page-size="pageVO.pageSize"
      :total="pageVO.total">
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
</script>
